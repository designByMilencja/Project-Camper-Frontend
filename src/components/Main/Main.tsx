import React from "react";
import {Chart} from "../Chart/Chart";
import {UserChoice} from "../UserChoice/UserChoice";
import './Main.css'
export const MainView = () =>  {
    return <div className="main">
        <Chart></Chart>
        <UserChoice></UserChoice>
    </div>
}
