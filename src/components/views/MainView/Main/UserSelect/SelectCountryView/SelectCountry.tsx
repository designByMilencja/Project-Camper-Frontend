import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../../../../common/Button/Button";
import {CountryEntity} from 'types';
import {useFetchAndLoading} from "../../../../../../hooks/useFetchAndLoading";
export const SelectCountry = () => {
    const [country, setCountry] = useState('');
    const [countryData, isLoading] = useFetchAndLoading('http://localhost:3001/country');


    const changeCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCountry(e.target.value)
    };
    const sendForm = (e: SyntheticEvent) => {
        e.preventDefault();
    }
    const urlCountry = `/country/${country}`;
    if (isLoading) return <h1>Trwa ładowanie...</h1>

    return <>
        <form onSubmit={sendForm} className="selectForm">
            <select name="country" onChange={changeCountry} value={country}>
                <option value=""> - kraj -</option>
                {countryData.map((country: CountryEntity) => <option key={country.id} value={country.name}>{country.name}</option>)}
            </select>
            <Button text="sprawdź" to={urlCountry} name="select" ></Button>
        </form>
    </>;
}
