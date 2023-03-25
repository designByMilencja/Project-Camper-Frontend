import React from "react";
import {AddCategoryView} from "./AddCategoryView";
import {AddPlaceView} from "./AddPlaceView";
import {AddPaymentView} from "./AddPaymentView";
import './Add.css';
import {Button} from "../../common/Button/Button";
export const AddView = () => {
return <>
    <AddCategoryView/>
    <AddPlaceView/>
    <AddPaymentView/>
    <Button text="Strona główna" to="link"/>
</>
}
