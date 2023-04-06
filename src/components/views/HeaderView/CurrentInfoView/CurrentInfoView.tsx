import React from "react";
import {Datetime} from "./DateTime/Datetime";
import {Subtitle} from "../../../common/Subtitle/Subtitle";

export const CurrentInfoView = () => {
    return (<div className="current-info">
        <Subtitle text="Aktualne miejsce: Teneryfa"/>
        <Datetime/>
    </div>)
}
