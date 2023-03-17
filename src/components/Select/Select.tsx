import React from "react";
import {Button} from "../common/Button/Button";
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
        <div className="selectCountry">
            <select name="country">
                <option value=""> - - - </option>
                <option value="">Hiszpania(kontynentalna)</option>
                <option value="">Hiszpania(Teneryfa)</option>
                <option value="">Polska</option>
            </select>
            <Button text="sprawdź"></Button>
        </div>
    </div>
</>
}
