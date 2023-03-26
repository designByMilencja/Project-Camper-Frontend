import React from "react";
import './Error.css';
import {Button} from "../../common/Button/Button";
interface Props {
    text?: string;
}

export const Error = (props: Props) => {
    return (<>
            <div className="errorBox">
                <h3>{props.text}</h3>
                <div className="errorImg">Obraz <a
                    href="https://pixabay.com/pl/users/elisariva-1348268/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1700515"> Elisa</a> z <a
                    href="https://pixabay.com/pl//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1700515"> Pixabay</a>
                </div>
            </div>
            <Button to="/" name="btn center" text="Powrót na stronę główną"/>
        </>
    )
}
