import React from "react";
import {Chart} from "../Chart/Chart";
import {Select} from "../Select/Select";
import './Main.css'
export const MainView = () =>  {
    return <div className="main">
        <Chart></Chart>
        <Select></Select>
    </div>
}
