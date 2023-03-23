import React from "react";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    idCountry: any;
}

export const SumAllCategoryInCountry = ({idCountry}: Props): any => {
    const url = `http://localhost:3001/payment/sum/all/categories/${idCountry}`
    const [data, isLoading] = useFetchAndLoading(url);

    if (isLoading) return <h1>Trwa ładowanie...</h1>
    return (<>
        <h3> {data ? `Podsumowanie miesiąca: ${data}PLN` : null}</h3>
    </>)
}

