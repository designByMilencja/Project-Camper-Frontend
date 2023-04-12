import React from "react";
import "./ErrorMessage.scss";

interface Props {
    message: string;
}

export const ErrorMessage = ({message}: Props) => {
    return <p className="error">{message}</p>;
}
