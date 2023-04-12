import React from "react";
import "./Sum.scss";
import {apiUrl} from "../../../config/api";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    month: number | undefined;
}

export const SumAllCategoryInMonth = ({month}: Props): JSX.Element => {
    const url = `${apiUrl}/payment/sum/all/months/${month}`;
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            <p className="load">Trwa ładowanie...</p>
            :
            <p className="summary"> {data ? `Podsumowanie miesiąca: ${data}PLN` : null}</p>}
    </>)
}

