import React from "react";
import '../MonthandCountry.css';
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";
import {ConverterView} from "../../common/Converter/Converter";
import {useParams} from "react-router-dom";
import {SumCategoryInMonth} from "../../common/Sum/SumCategoryInMonth";
import {SumAllCategoryInMonth} from "../../common/Sum/SumAllCategoryInMonth";
import {Line} from "../../common/Line/Line";
import {MonthEntity} from 'types';
import {Error} from "../ErrorView/Error";

export const Month = () => {
    const [categories, isLoading] = useFetchAndLoading('http://localhost:3001/category');
    const [monthsData] = useFetchAndLoading('http://localhost:3001/month');
    const allowMonths = monthsData.map((month: MonthEntity) => month.name)

    const {month} = useParams();
    const [chosenMonth] = monthsData.filter((chosenMonth:MonthEntity) => chosenMonth.name === month).map(chosenMonth => chosenMonth.number);

    if (isLoading) return <h1>Trwa ładowanie...</h1>
    if (typeof month === "undefined") {
        return <Error/>
    }
    return <>
        <h3>Wydatki 2023 💰
            {allowMonths.includes(month.toUpperCase()) ? ` Miesiąc: ${month.toUpperCase()}` :
                <strong> Niestety nie mamy informacji z podanego miesiąca :( </strong>}
        </h3>
        {allowMonths.includes(month.toUpperCase()) ?
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Kategoria</th>
                        <th>Suma</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories ? categories.map(category => <tr key={category.id}>
                        <td>{category.name}</td>
                        <SumCategoryInMonth idCategory={category.id} month={chosenMonth}/></tr>) : null}
                    </tbody>
                </table>
                <SumAllCategoryInMonth month={chosenMonth}/>
                <Line/>
            </div>
            :
            null}
        {allowMonths.includes(month.toUpperCase())  ?
            <ConverterView/> : <Error text="Wprowadź poprawną nazwę, aby sprawdzić wydatki"/>}
    </>
}
