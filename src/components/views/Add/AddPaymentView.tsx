import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../common/Button/Button";

export const AddPaymentView = () => {
    const [form, setForm] = useState({
        cost: 0,
        currency: '',
        boughtAt: '',
        idCountry: '',
        idCategory: '',
    });
    const saveNewPayment = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res =  await fetch('http://localhost:3001/payment', {
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
        <form className="form" onSubmit={saveNewPayment}>
            <h2>Dodaj wydatek</h2>
            <label>Kwota</label>
            <input type="number" maxLength={999999.99} required value={form.cost}
                   onChange={e => saveForm('cost', e.target.value)}/>
            <label>Waluta</label>
            <select value={form.currency} onChange={e => saveForm('currency', e.target.value)}>
                <option>--</option>
                <option>EUR</option>
            </select>
            <label>Data zakupu</label>
            <input type="date" required value={form.boughtAt} onChange={e => saveForm('boughtAt', e.target.value)}/>
            <label>Miejsce zakupu</label>
            <select value={form.idCountry} onChange={e => saveForm('idCountry', e.target.value)}>
                <option>--</option>
                <option>66d809b2-bd08-11ed-8ec8-7e1d1a287df9</option>
            </select>
            <label>Kategoria zakupu</label>
            <select name="idCategory" value={form.idCategory} onChange={e => saveForm('idCategory', e.target.value)}>
                <option>--</option>
                <option>d336e696-bd08-11ed-8ec8-7e1d1a287df9</option>
            </select>
            <Button text="Dodaj"/>
        </form>
    </>
}
