import React, {useState} from "react";
import {Button} from "../../../common/Button/Button";
import {handleErrors} from "../../../../utils";
interface FormValue {
    name:string;
    currency:string;
}
interface CurrencyRate {
    code: string;
    currency: string;
    mid: number;
}
export const AddCountryView = () => {
    const [form, setForm] = useState<FormValue>({
        name: '',
        currency: '',
    });
    const [symbols, setSymbols] = useState<string[]>([]);
    const token:Readonly<string|null> = sessionStorage.getItem('token');
    const currency = async () => {
        try {
            const url = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
            const res = await fetch(url, {mode: 'cors'});
            const data = await res.json();
            const rates = data[0].rates as CurrencyRate[];
            const currenciesSymbols = rates.map((rate:CurrencyRate)=> rate.code)
            setSymbols(currenciesSymbols);
        } catch (e) {
            console.error(e)
        }
    }
    const [status, setStatus] = useState<number>(0)
    const saveNewCountry = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/country', {
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
            <label>Nazwa kraju</label>
            <input type="text" required maxLength={60} minLength={5} value={form.name}
                   onChange={e => saveForm('name', e.target.value)} onMouseDown={clearInput}/>
            <label>Symbol waluty kraju</label>
            <select value={form.currency} onChange={e => saveForm('currency', e.target.value)} onClick={currency}>
                <option>--</option>
                {symbols.map((symbol, index)=><option key={index} value={symbol}>{symbol}</option>)}
            </select>
            <Button text="Dodaj kraj" name="btn"/>
            {status === 200 ? <p className="success" key="success">Kraj został dodany pomyślnie</p> : null}
            {status === 400 ? <p className="error" key="error">Kraj istnieje, przejdź do dodania wydatku </p> : null}
        </form>
    </>
}
