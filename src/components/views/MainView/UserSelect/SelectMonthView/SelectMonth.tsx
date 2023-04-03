import React, { useState} from "react";
import {Button} from "../../../../common/Button/Button";
import {MonthEntity} from 'types';
import {useFetchAndLoading} from "../../../../../hooks/useFetchAndLoading";
import '../UserSelect.scss'
export const SelectMonth = () => {
    const [month, setMonth] = useState<string|undefined>('');
    const [monthsData, isLoading]= useFetchAndLoading<MonthEntity|null,boolean>('http://localhost:3001/month');

    const changeMonth = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setMonth(e.target.value)
    };
    const sendForm = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
    }
    const urlMonth = `/month/${month}`;
    if (isLoading) return <p className="load">Trwa ładowanie...</p>
    return <>
        <form onSubmit={sendForm} className="selectForm">
            <select name="month" value={month} onChange={changeMonth}>
                <option value=""> - miesiąc -</option>
                {Array.isArray(monthsData) ? monthsData.map((month: MonthEntity) => <option key={month.id} value={month.name}>{month.name}</option>) : []}
            </select>
            <Button text="sprawdź" to={urlMonth} name="select"></Button>
        </form>
    </>;
}
