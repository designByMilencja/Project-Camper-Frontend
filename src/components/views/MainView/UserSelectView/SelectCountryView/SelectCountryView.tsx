import React, {useState} from "react";
import {Button} from "../../../../common/Button/Button";
import {CountryEntity} from 'types';
import {useFetchAndLoading} from "../../../../../hooks/useFetchAndLoading";
export const SelectCountryView = () => {
    const [country, setCountry] = useState<string|undefined>('');
    const [countryData, isLoading] = useFetchAndLoading<CountryEntity|null, boolean>('http://localhost:3001/country');

    const changeCountry = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setCountry(e.target.value)
    };
    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const urlCountry = `/country/${country}`;
    if (isLoading) return <p className="load">Trwa ładowanie...</p>

    return <>
        <form onSubmit={sendForm} className="selectForm">
            <select name="country" onChange={changeCountry} value={country}>
                <option value=""> - kraj -</option>
                {Array.isArray(countryData) ? countryData.map((country: CountryEntity) => <option key={country.id} value={country.name}>{country.name}</option>) : []}
            </select>
            <Button text="sprawdź" to={urlCountry} name="select" ></Button>
        </form>
    </>;
}