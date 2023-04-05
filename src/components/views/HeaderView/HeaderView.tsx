import React from "react";
import './HeaderView.scss';
import {Button} from "../../common/Button/Button";
import {Datetime} from "../../common/Datetime";

export const HeaderView = () => {
    return <>
        <header>
            <div className="header">
                <Button text="Wydatki w camperze" to="/" name="header"></Button>
                <Button text="Panel Admina" name="btn" to="admin"/>
            </div>
            <div className="current-info">
                <h2>Aktualne miejsce: Teneryfa</h2>
                <Datetime/>
            </div>
        </header>
    </>
}
