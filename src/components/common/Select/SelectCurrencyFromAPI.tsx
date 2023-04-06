import React from "react";
interface Props {
    symbols: string[];
    saveForm: (name: string, value: string) => void;
    form: {
        currency: string;
    }
    currency: () => Promise<void>;
}
export const SelectCurrencyFromAPI = ({symbols, saveForm, currency, form}: Props) => {
    return (<>
        <label>Symbol waluty kraju</label>
        <select value={form.currency} onChange={e => saveForm('currency', e.target.value)} onClick={currency}>
            <option>--</option>
            {symbols.map((symbol:string, index:number) => <option key={index} value={symbol}>{symbol}</option>)}
        </select>
    </>)
}
