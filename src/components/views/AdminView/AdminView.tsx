import React from "react";
import {Button} from "../../common/Button/Button";
import {LoginView} from "./LoginView/LoginView";

export const AdminView = () =>  {
    return <div className="adminChoice">
        <Button text="Przejdź do formularza rejestracji" to="/registration" name="center"/>
        <LoginView/>
    </div>
}
