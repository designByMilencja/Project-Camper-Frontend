import React from "react";
import { MonthEntity } from "types";

interface Props {
    month: string;
    changeMonth: (e:React.ChangeEvent<HTMLSelectElement>) => void;
    monthsData: MonthEntity[] | null;
}

export const SelectMonth = ({month, changeMonth, monthsData}: Props) => {
    return (<>
        <select name="month" value={month} onChange={changeMonth}>
            <option value=""> - miesiąc -</option>
            {monthsData ? monthsData.map((month: MonthEntity) => <option key={month.id} value={month.name}>{month.name}</option>) : []}
        </select>
    </>)
}
