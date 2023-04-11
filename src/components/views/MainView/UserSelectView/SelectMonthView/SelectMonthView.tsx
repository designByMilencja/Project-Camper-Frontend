import React, {useState} from "react";
import '../UserSelectView.scss'
import config from "../../../../../config/config.json";
import {MonthEntity} from 'types';
import {useFetchAndLoading} from "../../../../../hooks/useFetchAndLoading";
import {Button} from "../../../../common/Button/Button";
import {SelectMonth} from "./SelectMonth/SelectMonth";
import {LoadingView} from "../../../LoadingView/LoadingView";

export const SelectMonthView = () => {
    const [month, setMonth] = useState<string>('');
    const {month_url} = config;
    const [monthsData, isLoadingMonthData] = useFetchAndLoading<MonthEntity[] | null, boolean>(month_url);

    const changeMonth = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setMonth(e.target.value)
    };
    const sendForm = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    }
    const urlMonth = `/month/${month}`;
    if (isLoadingMonthData) return <LoadingView/>
    return <>
        <form onSubmit={sendForm} className="selectForm">
            <SelectMonth month={month} changeMonth={changeMonth} monthsData={monthsData}/>
            <Button text="sprawdź" to={urlMonth} name="select"></Button>
        </form>
    </>;
}
