import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../../common/Button/Button";

export const UserChoice = () => {
    const [month, setMonth] = useState('');
    const [country, setCountry] = useState('');

        const changeMonth = (e: any) => {
            setMonth(e.target.value)
        };
        const changeCountry = (e: any) => {
            setCountry(e.target.value)
        };

    const sendForm = (e: SyntheticEvent) => {
        e.preventDefault();
    }
    const urlMonth = `/month/${month}`
    const urlCountry = `/country/${country}`
    console.log(country)
    return <>
        <form onSubmit={sendForm}>
            <select name="month" value={month} onChange={changeMonth}>
                <option value=""> - miesiąc -</option>
                <option value="Grudzień">Grudzień</option>
                <option value="Styczeń">Styczeń</option>
                <option value="Październik">Październik</option>
            </select>
            <Button text="sprawdź" to={urlMonth}></Button>
            <select name="country" onChange={changeCountry} value={country}>
                <option value=''> - kraj -</option>
                <option value='H'>Hiszpania(kontynentalna)</option>
                <option value="Hi">Hiszpania(Teneryfa)</option>
                <option value="P">Polska</option>
            </select>
            <Button text="sprawdź" to={urlCountry} ></Button>
        </form>
    </>;
}

