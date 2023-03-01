import React from "react";
import './Header.css';
import {Button} from "../common/Button";

export const Header = () => {
    const dateTime = new Date().toLocaleString();
    return <>
    <header>
        <div className="header">
            <h1>Wydatki w camperze</h1>
            <Button text="Panel Admina"/>
        </div>
        <div className="current-info">
            <h3>Aktualne miejsce: Teneryfa</h3>
            <h3> {dateTime} </h3>
        </div>
    </header>
    </>
}
