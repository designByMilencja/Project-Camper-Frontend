import React from "react";
import {HeaderView} from "../HeaderView/HeaderView";
import {MainView} from "../MainView/MainView";
import {Route, Routes} from "react-router-dom";
import {MonthView} from "../MonthView/MonthView";
import {AddCategoryAndCountryView} from "../AddView/AddCategoryAndCountryView/AddCategoryAndCountryView";
import {CountryView} from "../CountryView/CountryView";
import {ErrorView} from "../ErrorView/ErrorView";
import {AddPaymentView} from "../AddView/AddPaymentView/AddPaymentView";
import {RegistrationView} from "../AdminView/RejestrationView/RegistrationView";
import {AdminView} from "../AdminView/AdminView";
import {Footer} from "../../Footer/Footer";

export const HomeView = () => {
    return <>
        <HeaderView/>
        <Routes>
            <Route path="/" element={<MainView/>}> </Route>
            <Route path="/month/:month" element={<MonthView/>}> </Route>
            <Route path="/country/:country" element={<CountryView/>}> </Route>
            <Route path="/admin" element={<AdminView/>}> </Route>
            <Route path="/registration" element={<RegistrationView/>}> </Route>
            <Route path="/add/category/country" element={<AddCategoryAndCountryView/>}> </Route>
            <Route path="/add/payment" element={<AddPaymentView/>}> </Route>
            <Route path="*" element={<ErrorView text="Niestety wybrana przez Ciebie ścieżka jeszcze nie istnieje!"/>}>
            </Route>
        </Routes>
        <Footer/>
    </>
}
