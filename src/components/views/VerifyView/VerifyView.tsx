import React from "react";
import "./VerifyView.scss";
import img from "../../../img/letter-g92dc4a393_640.png";
import {Subtitle} from "../../common/Subtitle/Subtitle";
import {SubSubtitle} from "../../common/SubSubtitle/SubSubtitle";

export const VerifyView = () => {
    return (<>
        <div className="verifyView">
            <Subtitle text="Na podany przez Ciebie adres email został wysłany link weryfikacyjny!"/>
            <img src={img} alt="Koperta symbolizująca mail z wysłanym linkiem weryfikacyjnym"/>
            <SubSubtitle text="Kliknij w niego, aby dokończyć proces rejestracji!"/>
        </div>
    </>)
}
