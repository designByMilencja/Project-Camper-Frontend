import React from "react";
import '../Table.css'
import {ConverterView} from "../../common/Converter/Converter";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";
import {useParams} from "react-router-dom";
import {Line} from "../../common/Line/Line";
import {CountryEntity} from 'types';
import {SumCategoryInCountry} from "../../common/Sum/SumCategoryInCountry";
import {SumAllCategoryInCountry} from "../../common/Sum/SumAllCategoryInCountry";
import {Error} from "../ErrorView/Error";

export const Country = () => {
    const [categories, isLoading] = useFetchAndLoading('http://localhost:3001/category');
    const [countriesData] = useFetchAndLoading('http://localhost:3001/country');
    const allowCountries = countriesData.map((country: CountryEntity) => country.name)
    const {country} = useParams();

    const [chosenCountry] = countriesData.filter((chosenCountry:CountryEntity) => chosenCountry.name === country).map(chosenCountry => chosenCountry.id);



    if (isLoading) return <h1>Trwa ładowanie...</h1>
    if (typeof country === "undefined") {
        return null
    }
    return <>
        <h3>Wydatki 2023 💰
            {allowCountries.includes(country.toUpperCase()) ? ` Kraj: ${country.toUpperCase()}` :
                <strong> Niestety nie mamy informacji z podanego kraju :( </strong>}
        </h3>
        {allowCountries.includes(country.toUpperCase()) ?
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Kategoria</th>
                        <th>Suma</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories ? categories.map(category => <tr key={category.id}>
                        <td>{category.name}</td>
                        <SumCategoryInCountry idCategory={category.id} idCountry={chosenCountry}/></tr>) : null}
                    </tbody>
                </table>
                <SumAllCategoryInCountry idCountry={chosenCountry}/>
                <Line/>
            </div>
            :
            null}
        {allowCountries.includes(country.toUpperCase()) ?
            <ConverterView/> : <Error text="Wprowadź poprawną nazwę miesiąca, aby sprawdzić wydatki"/>
           }
    </>
}
