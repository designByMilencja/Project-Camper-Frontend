import React from "react";
import {useCategoryInfo} from "../../../hooks/useCategoryInfo";
import {ConverterView} from "../../common/Converter/Converter";
import '../Table.css';
import {useSumCategory} from "../../../hooks/useSumCategory";

export const MonthView = () => {
    const sum = useSumCategory();
    const [categories, isLoading] = useCategoryInfo();
    if (isLoading) return <h1>Trwa ładowanie...</h1>
    return <>
        <table>
            <thead>
            <tr>
                <th>Wydatki 2023 </th>
                <th> miesiąc: </th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Kategoria</th>
                {categories ? categories.map(category => <td key={category.id}>{category.name}</td> ) : null}
            </tr>
            <tr>
                <th>Suma/PLN</th>
                <td>{sum}</td>
            </tr>
            </tbody>
        </table>
        <h3> Podsumowanie miesiąca: {} </h3>
        <div className="underline"/>
        <ConverterView/>
    </>
}
