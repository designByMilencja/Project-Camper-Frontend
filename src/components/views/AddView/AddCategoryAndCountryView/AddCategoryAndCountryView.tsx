import React from "react";
import '../AddView.scss';
import {AddCategoryView} from "./AddCategoryView";
import {AddCountryView} from "./AddCountryView";
import {Button} from "../../../common/Button/Button";
import {LogoutButton} from "../../../common/Button/LogoutButton";

export const AddCategoryAndCountryView = () => {
    return <>
        <h2 className="add">Dodaj kategorię lub kraj, by móc ewidencjonowac swoje wydatki 💰</h2>
        <AddCategoryView/>
        <AddCountryView/>
        <Button text="Przejdź do dodawania wydatków" to="/add/payment" name="center"/>
        <LogoutButton/>
    </>

}
