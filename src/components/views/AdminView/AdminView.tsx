import React from "react";
import {Button} from "../../common/Button/Button";

export const AdminView = () =>  {
    return <div className="adminChoice">
        <Button text="Przejdź do formularza rejestracji" to="/registration" name="center"/>
        <Button text="Przejdź do formularza logowania" to="/login" name="center"/>
    </div>
}
