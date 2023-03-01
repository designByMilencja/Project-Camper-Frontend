import React from "react";
import {Button} from "../common/Button";
import './Select.css'

export const Select = () => {
return <>
    <div className="select">
        <div className="selectMonth">
            <select name="month">
                <option value=""> - - - </option>
                <option value="">Grudzień</option>
                <option value="">Styczeń</option>
                <option value="">Luty</option>
            </select>
            <Button text="sprawdź"></Button>
        </div>
        <div className="selectPlace">
            <select name="place">
                <option value=""> - - - </option>
                <option value="">Hiszpania</option>
                <option value="">Teneryfa</option>
                <option value="">Polska</option>
            </select>
            <Button text="sprawdź"></Button>
        </div>
    </div>
</>
}
