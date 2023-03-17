import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../common/Button/Button";

export const AddPlaceView = () => {
    const [form, setForm] = useState({
        name: '',
        currency: '',
    });
    const saveNewCountry = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res =  await fetch('http://localhost:3001/country', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body:JSON.stringify({
                    ...form
                })
            })
            const data = await res.json()
            console.log(data)
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

    return <>
        <form className="form" onSubmit={saveNewCountry}>
            <h2>Dodaj miejsce</h2>
            <label>Nazwa</label>
            <input type="text" required maxLength={60} value={form.name}
                   onChange={e => saveForm('name', e.target.value)}/>
            <label>Symbol waluty</label>
            <input type="text" required value={form.currency} onChange={e => saveForm('currency', e.target.value)}/>
            <Button text="Dodaj"/>
        </form>
    </>
}
