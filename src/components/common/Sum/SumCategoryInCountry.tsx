import React from "react";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    idCategory: string | undefined;
    idCountry: string | undefined;
}

export const SumCategoryInCountry = ({idCategory, idCountry}: Props): JSX.Element => {
    const url = `http://localhost:3001/payment/sum/country/${idCategory}/${idCountry}`
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            (<h1>Trwa ładowanie...</h1>)
            :
            (<td> {data ? `${data}PLN` : "-"}</td>
        )}
    </>)
}

