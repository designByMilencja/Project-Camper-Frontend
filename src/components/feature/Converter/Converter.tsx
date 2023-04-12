import React, {useState} from "react";
import "./Converter.scss";

interface ExchangeRate {
    mid: number;
}

interface Rates {
    rates: ExchangeRate[];
}

export const ConverterView = () => {
    const [cost, setCost] = useState<string>('');
    const [select, setSelect] = useState<string>('');
    const [price, setPrice] = useState<number | null>(null);

    const fetchExchangeRate = async (select: string): Promise<number | null> => {
        try {
            const url = ` https://api.nbp.pl/api/exchangerates/rates/A/${select}/?format=json`;
            const res = await fetch(url, {mode: 'cors'});
            const {rates} = await res.json() as Rates;
            const exchangeRate = rates[0]?.mid.toFixed(2) ?? null;
            return Number(exchangeRate);
        } catch (e) {
            console.error(e);
            return null;
        }
    }
    const clicked = async () => {
        const exchangeRate = await fetchExchangeRate(select);
        if (exchangeRate !== null) {
            const result = Number(cost) / exchangeRate;
            setPrice(result);
        } else {
            console.error('exchange rate is undefined')
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
