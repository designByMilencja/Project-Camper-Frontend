import React from "react";
import "./Sum.scss";
import config from "../../../config/config.json";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    idCategory: string | undefined;
    idCountry: string | undefined;
}

export const SumCategoryInCountry = ({idCategory, idCountry}: Props): JSX.Element => {
    const {sumCountry_url} = config;
    const url = `${sumCountry_url}/${idCategory}/${idCountry}`;
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            <td>Trwa ładowanie...</td>
            :
            <td> {data ? `${data.toLocaleString('pl-PL', {minimumFractionDigits: 2})}PLN` : "-"}</td>}
    </>)
}

