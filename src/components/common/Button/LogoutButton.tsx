import React from "react";
import {Button} from "./Button";
import {useNavigate} from "react-router-dom";

export const LogoutButton = () => {
    const navigate = useNavigate();

    function logout() {
        sessionStorage.removeItem('token');
        navigate('/access');
    }

    return (<Button name="center" text="Wyloguj" onClick={logout}/>)
}
