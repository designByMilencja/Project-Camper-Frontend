import React from "react";
import {Header} from "../../Header/Header";
import {MainView} from "../../Main/Main";
import {Route, Routes} from "react-router-dom";
import {MonthView} from "../Month/MonthView";
import {AddView} from "../Add/AddView";
import {CountryView} from "../Country/CountryView";
import {LoginView} from "../Login/LoginView";


export const HomeView = () => {
return <>
    <Header></Header>
    <Routes>
        <Route path="/" element={<MainView/>}> </Route>
        <Route path="/month/:month" element={<MonthView/>}> </Route>
        <Route path="/country/:country" element={<CountryView/>}> </Route>
        <Route path="/login" element={<LoginView/>}> </Route>
        <Route path="/add" element={<AddView/>}> </Route>
    </Routes>

</>
}
