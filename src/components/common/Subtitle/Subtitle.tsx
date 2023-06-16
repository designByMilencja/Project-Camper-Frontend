import React from "react";
import "./Subtitle.scss";

interface Props {
    text: string;
    color?: string;
}

export const Subtitle = ({text, color}: Props) => <h2 className="subtitle" style={{color: color}}>{text}</h2>
