import React from "react";
import {Header} from "../HeaderView/Header";
import {MainView} from "../MainView/Main/Main";
import {Route, Routes} from "react-router-dom";
import {Month} from "../MonthView/Month";
import {AddView} from "../AddView/AddView";
import {Country} from "../CountryView/Country";
import {Login} from "../LoginView/Login";
import {Error} from "../ErrorView/Error";
export const Home = () => {
    return <>
        <Header></Header>
        <Routes>
            <Route path="/" element={<MainView/>}> </Route>
            <Route path="/month/:month" element={<Month/>}> </Route>
            <Route path="/country/:country" element={<Country/>}> </Route>
            <Route path="/login" element={<Login/>}> </Route>
            <Route path="/add" element={<AddView/>}> </Route>
            <Route path="*" element={<Error text="Niestety wybrana przez Ciebie ścieżka jeszcze nie istnieje!"/>}>
            </Route>
        </Routes>

    </>
}
