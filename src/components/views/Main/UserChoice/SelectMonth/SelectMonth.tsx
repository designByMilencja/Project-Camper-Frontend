import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../../../common/Button/Button";
import {useMonth} from "../../../../../hooks/useMonth";
import {MonthEntity} from 'types';

export const SelectMonth = () => {
    const [month, setMonth] = useState('');
    const monthsAndNumbers = useMonth();

    const changeMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMonth(e.target.value)
    };
    const sendForm = (e: SyntheticEvent) => {
        e.preventDefault();
    }
    const urlMonth = `/month/${month}`
    return <>
        <form onSubmit={sendForm}>
            <select name="month" value={month} onChange={changeMonth}>
                <option value=""> - miesiąc -</option>
                {monthsAndNumbers.map((month: MonthEntity) => <option key={month.id}
                                                                      value={month.name}>{month.name}</option>)}
            </select>
            <Button text="sprawdź" to={urlMonth}></Button>
        </form>
    </>;
}
