import React from "react";
import './HeaderView.scss';
import {Button} from "../../common/Button/Button";
import {CurrentInfoView} from "./CurrentInfoView/CurrentInfoView";
import {Title} from "../../common/Title/Title";

export const HeaderView = () => {
    return <>
        <header>
            <Title text="Wydatki w camperze"/>
            <Button text="Logowanie" name="menu" to="admin"/>
            <CurrentInfoView/>
        </header>
    </>
}
