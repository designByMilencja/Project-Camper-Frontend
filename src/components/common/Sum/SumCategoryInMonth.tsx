import React from "react";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    idCategory: any;
    month: number;
}

export const SumCategoryInMonth = ({idCategory, month}: Props): any => {
    const url = `http://localhost:3001/payment/sum/month/${idCategory}/${month}`
    const [data, isLoading] = useFetchAndLoading(url);

    if (isLoading) return <h1>Trwa ładowanie...</h1>
    return (<>
        <td> {data ? `${data}PLN` : "-"}</td>
    </>)
}

