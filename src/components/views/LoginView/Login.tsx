import React from "react";
import {Button} from "../../common/Button/Button";
import '../AddView/Add.css'

export const Login = () => {
    return <>
        <form className="form">
            <h3 className="add">Formularz logowania</h3>
            <label>Login lub e-mail:</label>
            <input type="text" required maxLength={50} name="login"/>
            <label>Hasło:</label>
            <input type="password" name="password" required maxLength={50}/>
            <Button text="Zaloguj" name="btn"/>
        </form>
        <Button text="Powrót na stronę główną" to="/" name="center"/>
    </>
}
