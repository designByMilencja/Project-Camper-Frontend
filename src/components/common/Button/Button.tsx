import React from "react";
import './Button.css';
import {Link} from "react-router-dom";
interface Props {
    text: string;
    to?: string;
}
export const Button = ({text, to}:Props) => to ? (<Link className="button" to={to}/>) : <button>{text}</button>

