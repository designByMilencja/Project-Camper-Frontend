import React from "react";
import './Error.scss';
import {Button} from "../../common/Button/Button";
import {SubSubtitle} from "../../common/SubSubtitle/SubSubtitle";
interface Props {
    text: string;
}

export const ErrorView = (props: Props) => {
    return (<>
            <div className="errorBox">
                <SubSubtitle text={props.text}/>
                <div className="errorImg"/>
            </div>
            <Button to="/" name="btn center" text="Powrót na stronę główną"/>
        </>
    )
}
