import React from "react";
import {Button} from "../../common/Button/Button";
import {LoginView} from "./LoginView/LoginView";
import {BackToMainButton} from "../../common/Button/BackToMainButton";

export const AccessView = () => {
    return <div className="adminChoice">
        <BackToMainButton/>
        <LoginView/>
        <Button text="Przejdź do formularza rejestracji" to="/registration" name="center"/>
    </div>
}
