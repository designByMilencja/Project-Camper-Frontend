import React, { useState} from "react";
import {Button} from "../../../common/Button/Button";
import {useFetchAndLoading} from "../../../../hooks/useFetchAndLoading";
import {CountryEntity} from 'types';
import {CategoryEntity} from 'types';
import {useNavigate} from "react-router-dom";
import {handleErrors} from "../../../../utils";
import {BackToMainButton} from "../../../common/Button/BackToMainButton";

interface FormValues {
    cost: number;
    currency: string;
    boughtAt: string;
    idCountry: string
    idCategory: string;
}
export const AddPaymentView = () => {
    const token:Readonly<string|null> = sessionStorage.getItem('token');
    const [form, setForm] = useState<FormValues>({
        cost: 0,
        currency: '',
        boughtAt: '',
        idCountry: '',
        idCategory: '',
    });

    const [countriesData, isLoadingCountriesData] = useFetchAndLoading<CountryEntity[] | null, boolean>('http://localhost:3001/country');
    const [categoriesData, isLoadingCategoriesData] = useFetchAndLoading<CategoryEntity[] | null, boolean>('http://localhost:3001/category');
    const currencies = Array.isArray(countriesData) ? countriesData.map((country: CountryEntity) => country.currency) : [];
    const noDoubleCurrencies = [...new Set(currencies)];


    const [status, setStatus] = useState<number>(0);

    const saveNewPayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/payment', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'},
                body: JSON.stringify({
                    ...form
                })
            })
            const status = res.status;
            setStatus(status)
            setForm({cost: 0, currency: '', boughtAt: '', idCategory: '', idCountry: ''})
        } catch (err) {
            handleErrors(err);
        }
    }
    const saveForm = (key: string, value: string) => {
        setForm(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }

    const clearInput = () => {
        setStatus(0);
    }
    const navigate = useNavigate()
    function logout() {
        sessionStorage.removeItem('token');
        navigate('/login')
    }
    const chosenDate = new Date(form.boughtAt)
    const todayDate = new Date();

    if (isLoadingCategoriesData || isLoadingCountriesData) return <h1>Trwa ładowanie...</h1>

    return <>
        <form className="form" onSubmit={saveNewPayment}>
            <h3 className='add'>Dodaj wydatek</h3>
            {form.cost > 999999 ? <p className="error">Płatność nie może być wyższa niż milion złotych</p> : null}
            <label>Kwota</label>
            <input type="number" maxLength={999999} required value={form.cost}
                   onChange={e => saveForm('cost', e.target.value)} onMouseDown={clearInput}/>
            <label>Waluta</label>
            <select value={form.currency} onChange={e => saveForm('currency', e.target.value)}>
                <option>--</option>
                {noDoubleCurrencies.map((currency, index) => <option key={index} value={currency}>{currency}</option>)}
            </select>
            { form.boughtAt !== '' && chosenDate>todayDate ? <p className="error">Data płatności nie może być z przyszłości</p> : null}
            <label>Data zakupu</label>
            <input type="date" required value={form.boughtAt}
                   onChange={e => saveForm('boughtAt', e.target.value)}/>
            <label>Miejsce zakupu</label>
            <select required value={form.idCountry} onChange={e => saveForm('idCountry', e.target.value)}>
                <option>--</option>
                {Array.isArray(countriesData) ? countriesData.map((country: CountryEntity) => <option key={country.name}
                                                                       value={country.id}>{country.name}</option>) : []}
            </select>
            <label>Kategoria zakupu</label>
            <select required name="category" value={form.idCategory} onChange={e => saveForm('idCategory', e.target.value)}>
                <option>--</option>
                {Array.isArray(categoriesData) ? categoriesData.map((category: CategoryEntity) => <option key={category.id}
                                                                          value={category.id}>{category.name}</option>) : []}
            </select>
            <Button text="Dodaj wydatek" name="btn"/>
            {status === 200 ? <p className="success">Wydatek został dodany pomyślnie</p> : null}
            {status === 400 ?
                <p className="error">Wydatek nie został dodany, sprawdź poprawność danych w formularzu </p> : null}
        </form>
        <BackToMainButton/>
        <button className="center" onClick={logout}>Wyloguj</button>
    </>
}
