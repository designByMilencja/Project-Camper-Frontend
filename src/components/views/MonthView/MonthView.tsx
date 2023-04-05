import React from "react";
import './MonthView.scss';
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";
import {useParams} from "react-router-dom";
import {MonthEntity, CategoryEntity} from 'types';
import {SumAllCategoryInMonth} from "../../Sum/SumAllCategoryInMonth";
import {CategorySumTable} from "./CategorySumTable";
import {ConverterView} from "../../common/Converter/Converter";
import {Line} from "../../common/Line/Line";
import {ErrorView} from "../ErrorView/ErrorView";
import {LoadingView} from "../LoadingView";

export const MonthView = () => {
    const {month} = useParams();
    const [categoriesData, isLoadingCategories] = useFetchAndLoading<CategoryEntity[] | null, boolean>('http://localhost:3001/category');
    const [monthsData, isLoadingMonths] = useFetchAndLoading<MonthEntity[] | null, boolean>('http://localhost:3001/month');
    const allowMonths = monthsData?.map((month: MonthEntity) => month.name) ?? [];
    const chosenMonth = monthsData?.find((chosenMonth: MonthEntity) => chosenMonth.name === month)?.number;

    if (isLoadingCategories || isLoadingMonths) return <LoadingView/>
    return (<>
        {month && allowMonths.includes(month.toUpperCase()) ?
            <>
                <h3>Wydatki 2023 💰Miesiąc: {month.toUpperCase()}</h3>
                <div>
                    <CategorySumTable categoriesData={categoriesData} chosenMonth={chosenMonth}/>
                    <SumAllCategoryInMonth month={chosenMonth}/>
                    <Line/>
                </div>
                <ConverterView/>
            </>
            :
            <ErrorView text="Wprowadź poprawną nazwę miesiąca, aby sprawdzić wydatki"/>}
    </>)
}
