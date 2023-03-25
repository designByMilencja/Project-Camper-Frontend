import React, {useState} from "react";
import './Converter.css';

export const ConverterView = () => {
    const [cost, setCost] = useState<string>('');
    const [select, setSelect] = useState<string>('');
    const [price, setPrice] = useState<number | null>(null);

    const clicked = async () => {
        console.log(cost, select)
        try {
            const url = ` https://api.nbp.pl/api/exchangerates/rates/A/${select}/?format=json`;
            const res = await fetch(url, {mode: 'cors'});
            const {rates} = await res.json();
            const exchangeRate = rates[0].mid.toFixed(2);
            const result = Number(cost) / exchangeRate
            setPrice(result);
        } catch (e) {
            console.error(e)
        }
    }
    const clearInput = () => {
        setCost('');
        setSelect('');
        setPrice(null);
    }
    return <>
        {price !== null ? <div className="result"><p> Kwota {cost} PLN to {price.toFixed(2)} {select} </p></div> : null}
        <div className="converter">
            <label>Wpisz kwotę:</label>
            <input type="text" value={cost} onChange={e => setCost(e.target.value)} onMouseDown={clearInput}/>
            <label>Wybierz walutę:</label>
            <select value={select} onChange={e => setSelect(e.target.value)}>
                <option value=''>---</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select>
            <button className="btn" onClick={clicked}>Przelicz</button>
        </div>
    </>
}
