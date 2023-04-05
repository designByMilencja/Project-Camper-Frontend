import React from "react";
import './CountryView.scss';
import {CountryEntity,CategoryEntity} from 'types';
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";
import {useParams} from "react-router-dom";
import {ConverterView} from "../../common/Converter/Converter";
import {SumAllCategoryInCountry} from "../../Sum/SumAllCategoryInCountry";
import {CountrySumTableView} from "./CountrySumTableView";
import {Line} from "../../common/Line/Line";
import {ErrorView} from "../ErrorView/ErrorView";
import {LoadingView} from "../LoadingView/LoadingView";

export const CountryView = () => {
    const {country} = useParams();
    const [categoriesData, isLoadingCategories] = useFetchAndLoading<CategoryEntity[] | null, boolean>('http://localhost:3001/category');
    const [countriesData, isLoadingCountries] = useFetchAndLoading<CountryEntity[] | null, boolean>('http://localhost:3001/country');
    const allowCountries = countriesData?.map((country: CountryEntity) => country.name) ?? [];
    const [chosenCountry] = countriesData?.filter((chosenCountry: CountryEntity) => chosenCountry.name === country).map((chosenCountry: CountryEntity) => chosenCountry.id) ?? [];

    if (isLoadingCountries || isLoadingCategories) return <LoadingView/>
    return (<>
        {country && allowCountries.includes(country.toUpperCase()) ?
            <>
                <h3>Wydatki 2023 💰Kraj: {country.toUpperCase()}</h3>
                <div>
                    <CountrySumTableView categoriesData={categoriesData} chosenCountry={chosenCountry}/>
                    <SumAllCategoryInCountry idCountry={chosenCountry}/>
                    <Line/>
                </div>
                <ConverterView/>
            </>
            :
            <ErrorView text="Wprowadź poprawną nazwę kraju, aby sprawdzić wydatki"/>}
    </>)
}
