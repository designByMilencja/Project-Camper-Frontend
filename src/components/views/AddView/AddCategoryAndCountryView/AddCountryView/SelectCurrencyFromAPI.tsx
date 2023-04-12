import React, {useState} from "react";

const apiNBP = "https://api.nbp.pl/api/exchangerates/tables/A/?format=json";

interface Props {
    saveForm: (name: string, value: string) => void;
    form: {
        currency: string;
    }
}

interface CurrencyRate {
    code: string;
    currency: string;
    mid: number;
}

export const SelectCurrencyFromAPI = ({saveForm, form}: Props) => {
    const [symbols, setSymbols] = useState<string[]>([]);
    const currency = async () => {
        try {
            const res = await fetch(apiNBP, {mode: 'cors'});
            const data = await res.json();
            const rates = data[0].rates as CurrencyRate[];
            const currenciesSymbols = rates.map((rate: CurrencyRate) => rate.code)
            setSymbols(currenciesSymbols);
        } catch (e) {
            console.error(e)
        }
    }
    return (<>
        <label>Symbol waluty kraju</label>
        <select value={form.currency} onChange={e => saveForm('currency', e.target.value)} onClick={currency}>
            <option>--</option>
            {symbols.map((symbol: string, index: number) => <option key={index} value={symbol}>{symbol}</option>)}
        </select>
    </>)
}
