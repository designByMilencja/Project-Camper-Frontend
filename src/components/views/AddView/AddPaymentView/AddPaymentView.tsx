import React, {useState} from "react";
import {CountryEntity, CategoryEntity, PaymentEntity} from 'types';
import {apiUrl} from "../../../../config/api";
import {handleErrors} from "../../../../utils/handleErrors";
import {useFetchAndLoading} from "../../../../hooks/useFetchAndLoading";
import {Button} from "../../../common/Button/Button";
import {BackToMainButton} from "../../../common/Button/BackToMainButton";
import {LoadingView} from "../../LoadingView/LoadingView";
import {InputField} from "../../../common/InputField/InputField";
import {SelectCurrencyFromDatabase} from "./SelectCurrencyFromDatabase/SelectCurrencyFromDatabase";
import {SelectCountry} from "./SelectCountry/SelectCountry";
import {SelectCategory} from "./SelectCategory/SelectCategory";
import {StatusResponse} from "../../../feature/StatusResponse/StatusResponse";
import {LogoutButton} from "../../../common/Button/LogoutButton";
import {ErrorMessage} from "../../../feature/ErrorMesage/ErrorMessage";
import {SubSubtitle} from "../../../common/SubSubtitle/SubSubtitle";
import {Subtitle} from "../../../common/Subtitle/Subtitle";

export const AddPaymentView = () => {
    const token: Readonly<string | null> = sessionStorage.getItem('token');
    const [form, setForm] = useState<PaymentEntity>({
        cost: 0,
        currency: '',
        boughtAt: '',
        idCountry: '',
        idCategory: '',
    });

    const [status, setStatus] = useState<number>(0);
    const [countriesData, isLoadingCountriesData] = useFetchAndLoading<CountryEntity[] | null, boolean>(`${apiUrl}/country`);
    const [categoriesData, isLoadingCategoriesData] = useFetchAndLoading<CategoryEntity[] | null, boolean>(`${apiUrl}/category`);
    const currencies = countriesData?.map((country: CountryEntity) => country.currency) ?? [];
    const noDoubleCurrencies = [...new Set(currencies)];

    const saveNewPayment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch(`${apiUrl}/payment`, {
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
        <Subtitle color="black" text="Dodaj płatność, by móc ewidencjonowac swoje wydatki 💰"/>
        <form className="form" onSubmit={saveNewPayment}>
            <SubSubtitle text="Dodaj wydatek"/>
            {form.cost > 999999 ? <ErrorMessage message="Płatność nie może być wyższa niż milion złotych"/> : null}
            <InputField label="Kwota" type="number" name="cost" value={form.cost}
                        onChange={e => saveForm('cost', e.target.value)} min = {1} maxLength={999999} onMouseDown={clearInput}
                        required/>
            <SelectCurrencyFromDatabase form={form} noDoubleCurrencies={noDoubleCurrencies} saveForm={saveForm}/>
            {form.boughtAt !== '' && chosenDate > todayDate ?
                <ErrorMessage message="Data płatności nie może być z przyszłości"/> : null}
            <InputField label="Data zakupu" type="date" name="date" value={form.boughtAt}
                        onChange={e => saveForm('boughtAt', e.target.value)} required/>
            <SelectCountry form={form} countriesData={countriesData} saveForm={saveForm}/>
            <SelectCategory form={form} categoriesData={categoriesData} saveForm={saveForm}/>
            <Button text="Dodaj wydatek" name="btn"/>
            <StatusResponse code={status} keyCategory="payment"/>
            {status !== 401 ? <LogoutButton/> : <Button text="Przejdź do logowania" to="/access" name="center"/>}
        </form>
        <BackToMainButton/>
    </>)
}
