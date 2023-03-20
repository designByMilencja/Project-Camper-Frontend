import React from "react";
import './Button.css';
import {Link} from "react-router-dom";
interface Props {
    text: string;
    to?: string;
}
export const Button = ({to, text}:Props) => (to ? <Link className="btn" to={to}>{text}</Link> : <button>{text}</button>)
