import React from "react";
import "./Subtitle.scss";
interface Props {
    text: string;
}
export const Subtitle = ({text}: Props) => {
    return (<h2 className="subtitle">{text}</h2>)
}
