import React from "react";
import './SuccessMessage.scss';
interface Props {
    message: string;
}

export const SuccessMessage = ({ message }:Props) => {
    return <p className="success">{message}</p>;
}
