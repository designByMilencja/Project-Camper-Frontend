import React from "react";
import {StatusResponseMessage} from "./StatusResponseMessage/StatusResponseMessage";

enum Status {
    None = 0,
    Success = 200,
    BadRequest = 400,
    Unauthorized = 401,
    ServerError = 500,
}

interface Props {
    code: Status;
    keyCategory: string;
}

interface StatusMessage {
    code: Status;
    message: { [key: string]: string };
}

export const StatusResponse = ({code, keyCategory}: Props) => {
    const serverError = 'Przepraszamy wystąpił błąd, spróbuj ponownie później';
    const statusMessages: StatusMessage[] = [
        {
            code: Status.Success,
            message: {
                category: 'Kategoria została dodana pomyślnie',
                country: 'Kraj został dodany pomyślnie',
                payment: 'Wydatek został dodany pomyślnie',
            },
        },
        {
            code: Status.BadRequest,
            message: {
                category: 'Podana kategoria jest już dodana, przejdź do dodawania wydatku',
                country: 'Podany kraj jest już dodany, przejdź do dodawania wydatku',
                payment: 'Błąd podczas dodawania wydatku, sprawdź poprawność danych w formularzu',
                registration: 'Odmowa rejestracji, sprawdź poprawność danych w formularzu'
            }
        },
        {
            code: Status.Unauthorized,
            message: {
                category: 'Jeśli chcesz dodać kategorię musisz się zalogować',
                country: 'Jeśli chcesz dodać kraj musisz się zalogować',
                payment: 'Jeśli chcesz dodać wydatek musisz się zalogować',
                error: 'Nieprawidłowy login lub hasło'
            }
        }, {
            code: Status.ServerError,
            message: {
                category: serverError,
                country: serverError,
                payment: serverError,
                registration: serverError,
            }
        },
    ];
    const statusMessage = statusMessages.find((msg) => msg.code === code);
    if (!statusMessage) {
        return null;
    }

    switch (code) {
        case Status.Success:
            return <StatusResponseMessage code="success" message={statusMessage.message} keyToDisplay={keyCategory}/>
        case Status.BadRequest:
        case Status.Unauthorized:
        case Status.ServerError:
            return <StatusResponseMessage code="error" message={statusMessage.message} keyToDisplay={keyCategory}/>;
        case Status.None:
        default:
            return null;
    }
}

