import React from "react";
import './Button.css';
interface Props {
    text: string;
}
export const Button = (props:Props) => {
return <button>{props.text}</button>
}
