import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../common/Button/Button";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";
import {CountryEntity} from 'types';
import {CategoryEntity} from 'types';
export const AddPayment = () => {
    const [form, setForm] = useState({
        cost: 0,
        currency: '',
        boughtAt: '',
        idCountry: '',
        idCategory: '',
    });

    const [countriesData] = useFetchAndLoading('http://localhost:3001/country');
    const [categoriesData] = useFetchAndLoading('http://localhost:3001/category');
    const currencies = countriesData.map((country: CountryEntity) => country.currency);
    const noDoubleCurrencies = [...new Set(currencies)];

    const [status, setStatus] = useState(0)
    const saveNewPayment = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/payment', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    ...form
                })
            })
            const status = res.status;
            setStatus(status)
            setForm({cost: 0, currency: '', boughtAt: '', idCategory: '', idCountry: ''})
        } catch (err: any) {
            console.error(err.message)
        }
    }
    const saveForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }

    const clearInput = () => {
        setStatus(0);
    }
    const chosenDate = new Date(form.boughtAt).toLocaleDateString().replaceAll("/", "");
    const todayDate = new Date().toLocaleDateString().replaceAll("/", "");
    const isCorrect = Number(chosenDate) - Number(todayDate);
    console.log(isCorrect)

    return <>
        <form className="form" onSubmit={saveNewPayment}>
            <h3 className='add'>Dodaj wydatek</h3>
            {form.cost > 999999 ? <p className="error">Płatność nie może być wyższa niż milion złotych</p> : null}
            <label>Kwota</label>
            <input type="number" maxLength={999999.99} required value={form.cost}
                   onChange={e => saveForm('cost', e.target.value)} onMouseDown={clearInput}/>
            <label>Waluta</label>
            <select value={form.currency} onChange={e => saveForm('currency', e.target.value)}>
                <option>--</option>
                {noDoubleCurrencies.map((currency, index)=><option key={index} value={currency}>{currency}</option>)}
            </select>
            {isCorrect > 0 ? <p className="error">Data płatności nie może być z przyszłości</p> : null}
            <label>Data zakupu</label>
            <input type="date" required value={form.boughtAt}
                   onChange={e => saveForm('boughtAt', e.target.value)}/>
            <label>Miejsce zakupu</label>
            <select value={form.idCountry} onChange={e => saveForm('idCountry', e.target.value)}>
                <option>--</option>
                {countriesData.map((country:CountryEntity)=> <option key={country.name} value={country.id}>{country.name}</option>)}
            </select>
            <label>Kategoria zakupu</label>
            <select name="category" value={form.idCategory} onChange={e => saveForm('idCategory', e.target.value)}>
                <option>--</option>
                {categoriesData.map((category:CategoryEntity)=> <option key={category.id} value={category.id}>{category.name}</option>)}
            </select>
            <Button text="Dodaj wydatek" name="btn"/>
            {status === 200 ? <p className="success">Wydatek został dodany pomyślnie</p> : null}
            {status === 400 ? <p className="error">Wydatek nie został dodany, sprawdź poprawność danych w  formularzu </p> : null }
                </form>
    </>
}
