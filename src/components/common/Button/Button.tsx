import React from "react";
import './Button.css';
import {Link} from "react-router-dom";
interface Props {
    name: string;
    text: string;
    to?: string;
}
export const Button = ({to, text, name}:Props) => (to ? <Link className={name} to={to}>{text}</Link> : <button className={name} >{text}</button>)
