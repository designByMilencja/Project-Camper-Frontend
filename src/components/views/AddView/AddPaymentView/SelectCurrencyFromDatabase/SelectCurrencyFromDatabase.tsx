import React from "react";

interface Props {
    form: {
        currency: string;
    };
    noDoubleCurrencies: string[];
    saveForm: (name: string, value: string) => void;
}

export const SelectCurrencyFromDatabase = ({form, noDoubleCurrencies, saveForm}: Props) => {
    return (<>
        <label>Waluta</label>
        <select
            value={form.currency}
            onChange={(e) => saveForm('currency', e.target.value)}
            required>
            <option>--</option>
            {noDoubleCurrencies.map((currency, index) => (
                <option key={index} value={currency}>{currency}</option>
            ))}
        </select>
    </>)
}
