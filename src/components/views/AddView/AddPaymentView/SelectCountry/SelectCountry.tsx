import { CountryEntity } from "types";
import React from "react";

interface Props {
    form: {
        idCountry: string;
    };
    countriesData: CountryEntity[] | null;
    saveForm: (name: string, value: string) => void;
}

export const SelectCountry = ({ form, countriesData, saveForm }: Props) => {
    return (<>
        <label>Kraj zakupu</label>
        <select
            value={form.idCountry}
            onChange={e => saveForm('idCountry', e.target.value)}
            required>
            <option>--</option>
            {countriesData?.map((country: CountryEntity) => (
                <option key={country.name} value={country.id}>
                    {country.name}
                </option>
            )) ?? []}
        </select>
    </>);
}

