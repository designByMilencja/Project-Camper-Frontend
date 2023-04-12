import React from "react";
import "./StatusResponseMessage.scss";

interface Props {
    message: { [key: string]: string };
    keyToDisplay: string;
    code: string;
}

export const StatusResponseMessage = ({message, keyToDisplay, code}: Props) => {
    const selectedMessage = message[keyToDisplay];
    return <p className={code}>{selectedMessage}</p>;
}
