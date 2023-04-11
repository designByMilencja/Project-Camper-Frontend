import React from "react"
import './MainView.scss'
import {ChartView} from "./ChartView/ChartView";
import {UserSelectView} from "./UserSelectView/UserSelectView";
import {Subtitle} from "../../common/Subtitle/Subtitle";
export const MainView = () =>  {
    return (<>
        <main>
        <Subtitle text="Sprawdź wydatki w wybranym kraju lub miesiącu w podziale na kategorie"/>
        <div className="main">
            <ChartView/>
            <UserSelectView/>
        </div>
        </main>
    </>)
}
