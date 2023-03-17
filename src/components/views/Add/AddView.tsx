import React from "react";
import {AddCategoryView} from "./AddCategoryView";
import './Add.css';
import {Button} from "../../common/Button/Button";
import {AddPlaceView} from "./AddPlaceView";
import {AddPaymentView} from "./AddPaymentView";

export const AddView = () => {
return <>
    <AddCategoryView/>
    <AddPlaceView/>
    <AddPaymentView/>
    <Button text="Powrót na stronę główną" />
</>
}
