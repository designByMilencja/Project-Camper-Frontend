import React, {useState} from "react";
import {CountryEntity} from 'types';
import config from "../../../../../config/config.json";
import {useFetchAndLoading} from "../../../../../hooks/useFetchAndLoading";
import {Button} from "../../../../common/Button/Button";
import {LoadingView} from "../../../LoadingView/LoadingView";
import {SelectCountry} from "./SelectCountry/SelectCountry";

export const SelectCountryView = () => {
    const [country, setCountry] = useState<string>('');
    const {country_url} = config;
    const [countriesData, isLoadingCountriesData] = useFetchAndLoading<CountryEntity[] | null, boolean>(country_url);

    const changeCountry = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setCountry(e.target.value)
    };
    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const urlCountry = `/country/${country}`;
    if (isLoadingCountriesData) return <LoadingView/>
    return <>
        <form onSubmit={sendForm} className="selectForm">
            <SelectCountry country={country} changeCountry={changeCountry} countriesData={countriesData}/>
            <Button text="sprawdź" to={urlCountry} name="select"></Button>
        </form>
    </>;
}
