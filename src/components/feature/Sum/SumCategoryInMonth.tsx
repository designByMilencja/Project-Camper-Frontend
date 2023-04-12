import React from "react";
import "./Sum.scss";
import {apiUrl} from "../../../config/api";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    idCategory: string | undefined;
    month: number | undefined;
}

export const SumCategoryInMonth = ({idCategory, month}: Props): JSX.Element => {
    const url = `${apiUrl}/payment/sum/month/${idCategory}/${month}`;
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            <td>Trwa ładowanie...</td>
            :
            (<td> {data ? `${data.toLocaleString('pl-PL', {minimumFractionDigits: 2})}PLN` : "-"}</td>)}
    </>)
}

