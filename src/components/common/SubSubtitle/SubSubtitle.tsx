import React from "react";
import "./SubSubtitle.scss";

interface Props {
    text: string;
}

export const SubSubtitle = ({text}: Props) => <h3 className="subSubtitle">{text}</h3>
