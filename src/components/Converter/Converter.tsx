import React from "react";
import {Button} from "../common/Button/Button";
import './Converter.css'

export const ConverterView = () => {
    return <>
        <div className="converter">
            <h3>Przelicz kwotę na:</h3>
            <select>
                <option>EUR</option>
                <option>USD</option>
            </select>
            <Button text="Przelicz"/>
        </div>
    </>
}
