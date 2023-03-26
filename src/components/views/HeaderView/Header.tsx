import React from "react";
import './Header.css';
import {Button} from "../../common/Button/Button";
import {Datetime} from "./Datetime";


export const Header = () => {
    return <>
        <header>
            <div className="header">
                <Button text="Wydatki w camperze" to="/" name="header"></Button>
                <Button text="Panel Admina" name="btn" to="login"/>
            </div>
            <div className="current-info">
                <h2>Aktualne miejsce: Teneryfa</h2>
                <Datetime/>
            </div>
        </header>
    </>
}
