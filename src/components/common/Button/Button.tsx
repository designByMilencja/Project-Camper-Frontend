import React from "react";
import './Button.scss';
import {Link} from "react-router-dom";

interface Props {
    name: string;
    text: string;
    to?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({to, text, name,onClick}: Props) => (to ? <Link className={name} to={to}>{text}</Link> :
    <button className={name} onClick={onClick}>{text}</button>)
