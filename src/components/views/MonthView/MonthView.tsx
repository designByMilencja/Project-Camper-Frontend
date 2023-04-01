import React from "react";
import '../Table.scss';
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";
import {ConverterView} from "../../common/Converter/Converter";
import {useParams} from "react-router-dom";
import {SumCategoryInMonth} from "../../common/Sum/SumCategoryInMonth";
import {SumAllCategoryInMonth} from "../../common/Sum/SumAllCategoryInMonth";
import {Line} from "../../common/Line/Line";
import {MonthEntity} from 'types';
import {CategoryEntity} from 'types';
import {ErrorView} from "../ErrorView/ErrorView";

export const MonthView = () => {
    const [categoriesData, isLoadingCategories] = useFetchAndLoading<CategoryEntity[] | null, boolean>('http://localhost:3001/category');
    const [monthsData, isLoadingMonths] = useFetchAndLoading<MonthEntity[] | null, boolean>('http://localhost:3001/month');
    const allowMonths = monthsData?.map((month: MonthEntity) => month.name) ?? [];
    const {month} = useParams();
    const chosenMonth = monthsData?.find((chosenMonth: MonthEntity) => chosenMonth.name === month)?.number?.toString();

    if (isLoadingCategories || isLoadingMonths) return <h1>Trwa ładowanie...</h1>
    if (!month || !allowMonths.includes(month.toUpperCase())) {
        return <ErrorView/>
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
                    {categoriesData ? categoriesData.map(category => <tr key={category.id}>
                        <td>{category.name}</td>
                        <SumCategoryInMonth idCategory={category.id} month={chosenMonth}/></tr>) : null}
                    </tbody>
                </table>
                <SumAllCategoryInMonth month={chosenMonth}/>
                <Line/>
            </div>
            :
            null}
        {allowMonths.includes(month.toUpperCase()) ?
            <ConverterView/> : <ErrorView text="Wprowadź poprawną nazwę, aby sprawdzić wydatki"/>}
    </>
}
