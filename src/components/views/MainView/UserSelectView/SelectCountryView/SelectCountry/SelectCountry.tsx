import React from "react";
import {CountryEntity} from "types";

interface Props {
    country: string;
    changeCountry: (e:React.ChangeEvent<HTMLSelectElement>) => void;
    countriesData: CountryEntity[] | null;
}

export const SelectCountry = ({country, changeCountry, countriesData}: Props) => {
    return (<>
        <select name="country" onChange={changeCountry} value={country}>
            <option value=""> - kraj -</option>
            {countriesData ? countriesData.map((country: CountryEntity) => <option key={country.id}
                                                                                   value={country.name}>{country.name}</option>) : []}
        </select>
    </>)
}
