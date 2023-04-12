import React from "react";
import "./Sum.scss";
import {apiUrl} from "../../../config/api";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    idCategory: string | undefined;
    idCountry: string | undefined;
}

export const SumCategoryInCountry = ({idCategory, idCountry}: Props): JSX.Element => {
    const url = `${apiUrl}/payment/sum/country/${idCategory}/${idCountry}`;
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            <td>Trwa ładowanie...</td>
            :
            <td> {data ? `${data.toLocaleString('pl-PL', {minimumFractionDigits: 2})}PLN` : "-"}</td>}
    </>)
}

