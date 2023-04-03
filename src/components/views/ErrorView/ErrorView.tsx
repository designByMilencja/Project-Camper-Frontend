import React from "react";
import './Error.scss';
import {Button} from "../../common/Button/Button";
interface Props {
    text?: string;
}

export const ErrorView = (props: Props) => {
    return (<>
            <div className="errorBox">
                <h3 className="error">{props.text}</h3>
                <div className="errorImg">
                </div>
            </div>
            <Button to="/" name="btn center" text="Powrót na stronę główną"/>
        </>
    )
}
