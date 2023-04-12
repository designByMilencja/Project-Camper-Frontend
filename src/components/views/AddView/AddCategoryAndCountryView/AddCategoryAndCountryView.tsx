import React from "react";
import "../AddView.scss";
import {AddCategoryView} from "./AddCategoryView/AddCategoryView";
import {AddCountryView} from "./AddCountryView/AddCountryView";
import {Button} from "../../../common/Button/Button";
import {Subtitle} from "../../../common/Subtitle/Subtitle";

export const AddCategoryAndCountryView = () => {
    return <>
        <Subtitle color="black" text="Dodaj kategorię lub kraj, by móc ewidencjonowac swoje wydatki 💰"/>
        <AddCategoryView/>
        <AddCountryView/>
        <Button text="Przejdź do dodawania wydatków" to="/add/payment" name="center"/>
    </>

}
