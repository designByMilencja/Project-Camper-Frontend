import React from "react";
import "./Button.scss";
import {Link} from "react-router-dom";

interface Props {
    name: string;
    text: string;
    disabled?: boolean;
    to?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({to, text, name, onClick, disabled}: Props) => (to ?
    <Link className={name} to={to}>{text}</Link> :
    <button className={name} onClick={onClick} disabled={disabled}>{text}</button>)
