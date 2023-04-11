import React, {useState} from "react";
import config from "../../../../../config/config.json";
import {Button} from "../../../../common/Button/Button";
import {handleErrors} from "../../../../../utils/handleErrors";
import {StatusResponse} from "../../../../feature/StatusResponse/StatusResponse";
import {InputField} from "../../../../common/InputField/InputField";
import {SelectCurrencyFromAPI} from "./SelectCurrencyFromAPI";
import {LogoutButton} from "../../../../common/Button/LogoutButton";
import { CountryEntity } from "types";
import {SubSubtitle} from "../../../../common/SubSubtitle/SubSubtitle";

export const AddCountryView = () => {
    const token: Readonly<string | null> = sessionStorage.getItem('token');
    const [form, setForm] = useState<CountryEntity>({
        name: '',
        currency: '',
    });

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
        setForm(prevState=> ({...prevState, [key]: value}));
    }
    const clearInput = () => {
        setStatus(0)
    }
    return <>
        <form className="form" onSubmit={saveNewCountry}>
            <SubSubtitle text="Dodaj kraj"/>
            <InputField label="Nazwa kraju" type="text" name="name" value={form.name} maxLength={60} minLength={5}
                        onChange={e => saveForm('name', e.target.value)} onMouseDown={clearInput} required/>
            <SelectCurrencyFromAPI saveForm={saveForm} form={form}/>
            <Button text="Dodaj kraj" name="btn"/>
            <StatusResponse code={status} keyCategory="country"/>
            {status !== 401 ? <LogoutButton/> : <Button text="Przejdź do logowania" to="/admin" name="center"/>}
        </form>
    </>
}
