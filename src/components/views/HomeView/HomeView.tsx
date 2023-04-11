import React from "react";
import {Route, Routes} from "react-router-dom";
import {HeaderView} from "../HeaderView/HeaderView";
import {MainView} from "../MainView/MainView";
import {MonthView} from "../MonthView/MonthView";
import {CountryView} from "../CountryView/CountryView";
import {ErrorView} from "../ErrorView/ErrorView";
import {AddPaymentView} from "../AddView/AddPaymentView/AddPaymentView";
import {AddCategoryAndCountryView} from "../AddView/AddCategoryAndCountryView/AddCategoryAndCountryView";
import {RegistrationView} from "../AccessView/RejestrationView/RegistrationView";
import {AccessView} from "../AccessView/AccessView";
import {FooterView} from "../FooterView/FooterView";
import {VerifyView} from "../VerifyView/VerifyView";

export const HomeView = () => {
    return <>
        <HeaderView/>
        <Routes>
            <Route path="/" element={<MainView/>}> </Route>
            <Route path="/month/:month" element={<MonthView/>}> </Route>
            <Route path="/country/:country" element={<CountryView/>}> </Route>
            <Route path="/access" element={<AccessView/>}> </Route>
            <Route path="/verify" element={<VerifyView/>}> </Route>
            <Route path="/registration" element={<RegistrationView/>}> </Route>
            <Route path="/add/category/country" element={<AddCategoryAndCountryView/>}> </Route>
            <Route path="/add/payment" element={<AddPaymentView/>}> </Route>
            <Route path="*" element={<ErrorView text="Niestety wybrana ścieżka nie istnieje!"/>}>
            </Route>
        </Routes>
        <FooterView/>
    </>
}
