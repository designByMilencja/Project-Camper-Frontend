import React from "react";
import "./Sum.scss";
import config from "../../../config/config.json";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    idCategory: string | undefined;
    month: number | undefined;
}

export const SumCategoryInMonth = ({idCategory, month}: Props): JSX.Element => {
    const {sumCategory_url} = config;
    const url = `${sumCategory_url}/${idCategory}/${month}`;
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            <td>Trwa ładowanie...</td>
            :
            (<td> {data ? `${data.toLocaleString('pl-PL', {minimumFractionDigits: 2})}PLN` : "-"}</td>)}
    </>)
}

