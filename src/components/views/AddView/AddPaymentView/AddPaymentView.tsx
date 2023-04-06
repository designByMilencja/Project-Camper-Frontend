import React, {useState} from "react";
import {CountryEntity, CategoryEntity} from 'types';
import config from "../../../../utils/config.json";
import {handleErrors} from "../../../../utils/handleErrors";
import {useFetchAndLoading} from "../../../../hooks/useFetchAndLoading";
import {Button} from "../../../common/Button/Button";
import {BackToMainButton} from "../../../common/Button/BackToMainButton";
import {LoadingView} from "../../LoadingView/LoadingView";
import {InputField} from "../../../common/InputField/InputField";
import {SelectCurrencyFromDatabase} from "../../../common/Select/SelectCurrencyFromDatabase";
import {SelectCountry} from "../../../common/Select/SelectCountry";
import {SelectCategory} from "../../../common/Select/SelectCategory";
import {ErrorMessage} from "../../../common/ErrorMesage/ErrorMessage";
import {StatusResponse} from "../../../common/StatusResponse/StatusResponse";
import {LogoutButton} from "../../../common/Button/LogoutButton";

interface FormValues {
    cost: number;
    currency: string;
    boughtAt: string;
    idCountry: string
    idCategory: string;
}

export const AddPaymentView = () => {
    const token: Readonly<string | null> = sessionStorage.getItem('token');
    const [form, setForm] = useState<FormValues>({
        cost: 0,
        currency: '',
        boughtAt: '',
        idCountry: '',
        idCategory: '',
    });

    const [status, setStatus] = useState<number>(0);
    const [countriesData, isLoadingCountriesData] = useFetchAndLoading<CountryEntity[] | null, boolean>('http://localhost:3001/country');
    const [categoriesData, isLoadingCategoriesData] = useFetchAndLoading<CategoryEntity[] | null, boolean>('http://localhost:3001/category');
    const currencies = countriesData?.map((country: CountryEntity) => country.currency) ?? [];
    const noDoubleCurrencies = [...new Set(currencies)];

    const saveNewPayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const {payment_url} = config;
            const res = await fetch(payment_url, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json'
                },
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
    const chosenDate = new Date(form.boughtAt)
    const todayDate = new Date();

    if (isLoadingCategoriesData || isLoadingCountriesData) return <LoadingView/>
    return (<>
        <form className="form" onSubmit={saveNewPayment}>
            <h3 className='add'>Dodaj wydatek</h3>
            {form.cost > 999999 ? <ErrorMessage message="Płatność nie może być wyższa niż milion złotych"/> : null}
            <InputField label="Kwota"
                        type="number"
                        name="cost"
                        value={form.cost}
                        onChange={e => saveForm('cost', e.target.value)}
                        maxLength={999999}
                        onMouseDown={clearInput}
                        required/>
            <SelectCurrencyFromDatabase form={form}
                                        noDoubleCurrencies={noDoubleCurrencies}
                                        saveForm={saveForm}/>
            {form.boughtAt !== '' && chosenDate > todayDate ? <ErrorMessage message="Data płatności nie może być z przyszłości"/> : null}
            <InputField label="Data zakupu"
                        type="date"
                        name="date"
                        value={form.boughtAt}
                        onChange={e => saveForm('boughtAt', e.target.value)}
                        required/>
            <SelectCountry form={form}
                           countriesData={countriesData}
                           saveForm={saveForm}/>
            <SelectCategory form={form}
                            categoriesData={categoriesData}
                            saveForm={saveForm}/>
            <Button text="Dodaj wydatek" name="btn"/>
            <StatusResponse code={status}/>
            </form>
            <BackToMainButton/>
            {status !== 401 ? <LogoutButton/> :
                <Button text="Przejdź do logowania" to="/admin" name="center"/>}
        </>)
        }
