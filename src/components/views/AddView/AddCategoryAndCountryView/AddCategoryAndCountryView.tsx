import React from "react";
import {AddCategoryView} from "./AddCategoryView";
import {AddCountryView} from "./AddCountryView";
import '../AddView.scss';
import '../../../common/Button/Button.scss'
import {Button} from "../../../common/Button/Button";
import {useNavigate} from "react-router-dom";

export const AddCategoryAndCountryView = () => {
    const navigate = useNavigate()
    function logout() {
        sessionStorage.removeItem('token');
        navigate('/login')
    }
    return <>
        <h2 className="add">Dodaj kategorię lub kraj, by móc ewidencjonowac swoje wydatki 💰</h2>
        <AddCategoryView/>
        <AddCountryView/>
        <Button text="Przejdź do dodawania wydatków" to="/add/payment" name="center"/>
        <button className="center" onClick={logout}>Wyloguj</button>
    </>

}
