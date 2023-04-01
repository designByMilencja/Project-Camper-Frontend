import React from "react";
import {SelectMonth} from "./SelectMonthView/SelectMonth";
import {SelectCountry} from "./SelectCountryView/SelectCountry";
import './UserSelect.scss'
export const UserSelect = () => {
    return <>
        <SelectMonth/>
        <SelectCountry/>
    </>;
}

