import React from "react";
import "./Sum.scss";
import config from "../../../config/config.json";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    month: number | undefined;
}

export const SumAllCategoryInMonth = ({month}: Props): JSX.Element => {
    const {sumAllMonths_url} = config;
    const url = `${sumAllMonths_url}/${month}`;
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            <p className="load">Trwa ładowanie...</p>
            :
            <p className="summary"> {data ? `Podsumowanie miesiąca: ${data}PLN` : null}</p>}
    </>)
}

