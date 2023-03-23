import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../../../common/Button/Button";
import {MonthEntity} from 'types';
import {useFetchAndLoading} from "../../../../../hooks/useFetchAndLoading";

export const SelectMonth = () => {
    const [month, setMonth] = useState('');
    const [monthsData, isLoading]= useFetchAndLoading('http://localhost:3001/month');

    const changeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(e.target.value)
    };
    const sendForm = (e: SyntheticEvent) => {
        e.preventDefault();
    }
    const urlMonth = `/month/${month}`;
    if (isLoading) return <h1>Trwa ładowanie...</h1>
    return <>
        <form onSubmit={sendForm}>
            <select name="month" value={month} onChange={changeMonth}>
                <option value=""> - miesiąc -</option>
                {monthsData.map((month: MonthEntity) => <option key={month.id} value={month.name}>{month.name}</option>)}
            </select>
            <Button text="sprawdź" to={urlMonth} name="btn"></Button>
        </form>
    </>;
}
