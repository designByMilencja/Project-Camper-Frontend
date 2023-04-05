import React from "react";
import {useFetchAndLoading} from "../../hooks/useFetchAndLoading";

interface Props {
    idCountry: string | undefined;
}

export const SumAllCategoryInCountry = ({idCountry}: Props): JSX.Element => {
    const url = `http://localhost:3001/payment/sum/all/categories/${idCountry}`
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            <p className="load">Trwa ładowanie...</p>
            :
            <h3> {data ? `Podsumowanie miesiąca: ${data}PLN` : null}</h3>}
    </>)
}
