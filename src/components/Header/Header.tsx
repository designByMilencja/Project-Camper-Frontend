import React from "react";
import './Header.css';
import {Button} from "../common/Button/Button";
import {Datetime} from "./Datetime";


export const Header = () => {
    return <>
        <header>
            <div className="header">
                <h1>Wydatki w camperze</h1>
                <Button text="Panel Admina"/>
            </div>
            <div className="current-info">
                <h2>Aktualne miejsce: Teneryfa</h2>
                <Datetime/>
            </div>
        </header>
    </>
}
