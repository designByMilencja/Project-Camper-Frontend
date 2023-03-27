import React from "react";
import {AddCategory} from "./AddCategory";
import {AddCountry} from "./AddCountry";
import './Add.css';
import '../../../common/Button/Button.css'
import {Button} from "../../../common/Button/Button";
export const AddCategoryAndCountryView = () => {
return <>
    <h2 className="add">Dodaj kategorię lub kraj, by móc ewidencjonowac swoje wydatki 💰</h2>
    <AddCategory/>
    <AddCountry/>
    <Button text="Przejdź do dodawania wydatków" to="/add/payment" name="center"/>
</>
}
