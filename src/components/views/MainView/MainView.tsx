import React from "react";
import {Chart} from "./Chart/Chart";
import {UserSelect} from "./UserSelect/UserSelect";
import './MainView.scss'
export const MainView = () =>  {
    return <div className="main">
        <Chart/>
        <UserSelect/>
    </div>
}
