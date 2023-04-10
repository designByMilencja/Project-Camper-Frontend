import React from "react";
import "./Sum.scss";
import config from "../../../config/config.json";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    idCountry: string | undefined;
}

export const SumAllCategoryInCountry = ({idCountry}: Props): JSX.Element => {
    const {sumAllCategories_url} = config;
    const url = `${sumAllCategories_url}/${idCountry}`;
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            <p className="load">Trwa ładowanie...</p>
            :
            <p className="summary"> {data ? `Podsumowanie miesiąca: ${data}PLN` : null}</p>}
    </>)
}

