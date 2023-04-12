import React from "react";
import "./Sum.scss";
import {apiUrl} from "../../../config/api";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";

interface Props {
    idCountry: string | undefined;
}

export const SumAllCategoryInCountry = ({idCountry}: Props): JSX.Element => {
    const url = `${apiUrl}/payment/sum/all/categories/${idCountry}`;
    const [data, isLoading] = useFetchAndLoading<number, boolean>(url);

    return (<>
        {isLoading ?
            <p className="load">Trwa ładowanie...</p>
            :
            <p className="summary"> {data ? `Podsumowanie kraju: ${data}PLN` : null}</p>}
    </>)
}

