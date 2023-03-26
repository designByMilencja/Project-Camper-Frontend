import React from "react";
import {AddCategory} from "./AddCategory";
import {AddCountry} from "./AddCountry";
import {AddPayment} from "./AddPayment";
import './Add.css';
import '../../common/Button/Button.css'
import {Button} from "../../common/Button/Button";
export const AddView = () => {
return <>
    <h2 className="add">Dodaj kategorię lub kraj, jeśli ich jeszcze nie dodawałeś lub przejdź od razu do dodawania wydatków 💰</h2>
    <AddCategory/>
    <AddCountry/>
    <AddPayment/>
    <Button text="Powrót na stronę główną" to="/" name="center"/>
</>
}
