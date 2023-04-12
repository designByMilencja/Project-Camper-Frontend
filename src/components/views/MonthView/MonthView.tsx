import React from "react";
import {MonthEntity, CategoryEntity} from 'types';
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";
import {useParams} from "react-router-dom";
import {SumAllCategoryInMonth} from "../../feature/Sum/SumAllCategoryInMonth";
import {MonthSumTableView} from "./MonthSumTableView";
import {ConverterView} from "../../feature/Converter/Converter";
import {Line} from "../../common/Line/Line";
import {ErrorView} from "../ErrorView/ErrorView";
import {LoadingView} from "../LoadingView/LoadingView";
import {Subtitle} from "../../common/Subtitle/Subtitle";
import {apiUrl} from "../../../config/api";

export const MonthView = () => {
    const {month} = useParams();
    const [categoriesData, isLoadingCategories] = useFetchAndLoading<CategoryEntity[] | null, boolean>(`${apiUrl}/category`);
    const [monthsData, isLoadingMonths] = useFetchAndLoading<MonthEntity[] | null, boolean>(`${apiUrl}/month`);
    const allowMonths = monthsData?.map((month: MonthEntity) => month.name) ?? [];
    const chosenMonth = monthsData?.find((chosenMonth: MonthEntity) => chosenMonth.name === month)?.number;

    if (isLoadingCategories || isLoadingMonths) return <LoadingView/>
    return (<>
            {month && allowMonths.includes(month.toUpperCase()) ?
                <>
                    <Subtitle color="black" text={`Wydatki 2023 💰Miesiąc: ${month.toUpperCase()}`}/>
                    <MonthSumTableView categoriesData={categoriesData} chosenMonth={chosenMonth}/>
                    <SumAllCategoryInMonth month={chosenMonth}/>
                    <Line/>
                    <ConverterView/>
                </>
                :
                <ErrorView text="Wprowadź poprawną nazwę miesiąca, aby sprawdzić wydatki"/>}
        </>
    );
};
