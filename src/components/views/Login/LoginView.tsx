import React from "react";
import {Button} from "../../common/Button/Button";
import '../Add/Add.css'

export const LoginView = () => {
    return <>
        <form className="form">
            <h2>Formularz logowania</h2>
            <label>Login lub e-mail:</label>
            <input type="text" required maxLength={50} name="login"/>
            <label>Hasło:</label>
            <input type="password" name="password" required maxLength={50}/>
            <Button text="Zaloguj"/>
        </form>
    </>
}
