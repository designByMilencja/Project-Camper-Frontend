import React from "react";
import {SuccessMessage} from "../SuccessMessage/SuccessMessage";
import {ErrorMessage} from "../ErrorMesage/ErrorMessage";

enum Status {
    None = 0,
    Success = 200,
    BadRequest = 400,
    Unauthorized = 401,
}

interface Props {
    code: number;
}

interface StatusMessage {
    code: Status;
    message: string;
}

export const StatusResponse = ({code}: Props) => {
    const statusMessages: StatusMessage[] = [
        {code: Status.Success, message: `Dodano pomyślnie`},
        {code: Status.BadRequest, message: `Błąd podczas dodawania, sprawdź poprawność danych w formularzu`},
        {code: Status.Unauthorized, message: `Jeśli chcesz dodać formularz musisz się zalogować`},
    ];
    const statusMessage = statusMessages.find((msg) => msg.code === code);
    if (!statusMessage) {
        return null;
    }
    switch (code) {
        case Status.Success:
            return <SuccessMessage message={statusMessage?.message}/>
        case Status.BadRequest:
            return <ErrorMessage message={statusMessage?.message}/>;
        case Status.Unauthorized:
            return <ErrorMessage message={statusMessage?.message}/>;
        case Status.None:
        default:
            return null;
    }
}
