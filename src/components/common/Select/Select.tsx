import React from "react";
import './Select.css'
interface Props {
    name: string;
    value: string;
    onChange: (e:any) => any;
    children: any;
}
export const Select = (props:Props) => {
    return (
        <select name={props.name} onChange={props.onChange} value={props.value}>
        </select>
    )
}

