import React from "react";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    idCategory: any;
    idCountry: string;
}

export const SumCategoryInCountry = ({idCategory, idCountry}: Props): any => {
    const url = `http://localhost:3001/payment/sum/country/${idCategory}/${idCountry}`
    const [data, isLoading] = useFetchAndLoading(url);

    if (isLoading) return <h1>Trwa ładowanie...</h1>
    return (<>
        <td> {data ? `${data}PLN` : "-"}</td>
    </>)
}

