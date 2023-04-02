import React from "react";
import {useFetchAndLoading} from "../../hooks/useFetchAndLoading";

interface Props {
    idCategory: string | undefined;
    month: string | undefined;
}

export const SumCategoryInMonth = ({idCategory, month}: Props): JSX.Element => {
    const url = `http://localhost:3001/payment/sum/month/${idCategory}/${month}`
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            (<td>Trwa ładowanie...</td>)
            :
            (<td> {data ? `${data}PLN` : "-"}</td>)}
    </>)
}

