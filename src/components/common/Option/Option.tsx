import React from "react";
interface Props {
    value: string;
    children: any;
}
export const Option = (props:Props) => {
  return (
      <option value={props.value}> {props.children} </option>
  )
}
