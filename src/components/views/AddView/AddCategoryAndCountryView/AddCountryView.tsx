import React, {useState} from "react";
import config from "../../../../utils/config.json";
import {Button} from "../../../common/Button/Button";
import {handleErrors} from "../../../../utils/handleErrors";
import {StatusResponse} from "../../../common/StatusResponse/StatusResponse";
import {InputField} from "../../../common/InputField/InputField";
import {SelectCurrencyFromAPI} from "../../../common/Select/SelectCurrencyFromAPI";

interface FormValue {
    name: string;
    currency: string;
}

interface CurrencyRate {
    code: string;
    currency: string;
    mid: number;
}

export const AddCountryView = () => {
    const token: Readonly<string | null> = sessionStorage.getItem('token');
    const [form, setForm] = useState<FormValue>({
        name: '',
        currency: '',
    });
    const [symbols, setSymbols] = useState<string[]>([]);
    const currency = async () => {
        try {
            const {apiNBP_url} = config;
            const res = await fetch(apiNBP_url, {mode: 'cors'});
            const data = await res.json();
            const rates = data[0].rates as CurrencyRate[];
            const currenciesSymbols = rates.map((rate: CurrencyRate) => rate.code)
            setSymbols(currenciesSymbols);
        } catch (e) {
            console.error(e)
        }
    }
    const [status, setStatus] = useState<number>(0)
    const saveNewCountry = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const {country_url} = config;
            const res = await fetch(country_url, {
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
            setForm({name: "", currency: ''})

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
        setStatus(0)
    }
    return <>
        <form className="form" onSubmit={saveNewCountry}>
            <h3 className='add'>Dodaj kraj</h3>
            <InputField label="Nazwa kraju"
                        type="text"
                        name="name"
                        value={form.name}
                        maxLength={60}
                        minLength={5}
                        onChange={e => saveForm('name', e.target.value)}
                        onMouseDown={clearInput}
                        required/>
            <SelectCurrencyFromAPI symbols={symbols} saveForm={saveForm} form={form} currency={currency}/>
            <Button text="Dodaj kraj" name="btn"/>
            <StatusResponse code={status}/>
        </form>
    </>
}
