import React from "react";
import "./Title.scss";
import {useNavigate} from "react-router-dom";

interface Props {
    text: string;
}

export const Title = ({text}: Props) => {
    const navigate = useNavigate();
    return (
        <h1 className="title" onClick={() => navigate("/")}>{text}</h1>
    )
}
