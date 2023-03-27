import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../common/Button/Button";

export const AddCountry = () => {
    const [symbols, setSymbols] = useState([]);
    const currency = async () => {
        try {
            const url = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
            const res = await fetch(url, {mode: 'cors'});
            const data = await res.json();
            const rates = data[0].rates;
            const currenciesSymbols = rates.map((rate:any)=> rate.code)
            setSymbols(currenciesSymbols);
        } catch (e) {
            console.error(e)
        }
    }
    const [form, setForm] = useState({
        name: '',
        currency: '',
    });
    const [status, setStatus] = useState(0)
    const saveNewCountry = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/country', {
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
            setForm({name: "", currency: ''})

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
        setStatus(0)
    }
    return <>
        <form className="form" onSubmit={saveNewCountry}>
            <h3 className='add'>Dodaj kraj</h3>
            <label>Nazwa kraju</label>
            <input type="text" required maxLength={60} value={form.name}
                   onChange={e => saveForm('name', e.target.value)} onMouseDown={clearInput}/>
            <label>Symbol waluty kraju</label>
            <select value={form.currency} onChange={e => saveForm('currency', e.target.value)} onClick={currency}>
                <option>--</option>
                {symbols.map((symbol, index)=><option key={index} value={symbol}>{symbol}</option>)}
            </select>
            <Button text="Dodaj kraj" name="btn"/>
            {status === 200 ? <p className="success">Kraj został dodany pomyślnie</p> : null}
            {status === 400 ? <p className="error">Kraj istnieje, przejdź do dodania wydatku </p> : null}
        </form>
    </>
}
