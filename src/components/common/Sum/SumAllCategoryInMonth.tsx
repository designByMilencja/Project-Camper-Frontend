import React from "react";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    month: string | undefined;
}

export const SumAllCategoryInMonth = ({month}: Props): JSX.Element => {
    const url = `http://localhost:3001/payment/sum/all/months/${month}`
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            (<h1>Trwa ładowanie...</h1>)
            :
            ( <h3> {data ? `Podsumowanie miesiąca: ${data}PLN` : null}</h3>)}
    </>)
}

