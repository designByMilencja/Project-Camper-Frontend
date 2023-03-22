import React from "react";
import {useFetchAndLoading} from "../../../hooks/useFetchAndLoading";
import {ConverterView} from "../../common/Converter/Converter";
import '../Table.css';
import {MonthEntity} from 'types';
import {AddCategoryEntity} from 'types';
import {useParams} from "react-router-dom";
import {SumCategoryInMonth} from "../../common/Sum/SumCategoryInMonth";
import {useMonth} from "../../../hooks/useMonth";
import {SumAllCategoryInMonth} from "../../common/Sum/SumAllCategoryInMonth";
import {Line} from "../../common/Line/Line";

export const MonthView = () => {
    const [data, isLoading] = useFetchAndLoading('http://localhost:3001/category');
    const categories: AddCategoryEntity[] = [...data];

    const monthsAndNumbers = useMonth();
    const allowMonths = monthsAndNumbers.map((element: MonthEntity) => element.name)

    const {month} = useParams();
    const correctMonth = monthsAndNumbers.filter((a: any) => a.name === month)
    const numberOfChosenMonth = correctMonth.map((a: any) => a.number)
    // Promise.all([categories, allowMonths]).then((values) => {
    //     console.log(values)
    // });

    if (typeof month === "undefined") {
        return null
    }
    if (isLoading) return <h1>Trwa ładowanie...</h1>
    return <> <h3>Wydatki 2023 💰
        {allowMonths.includes(month.toUpperCase()) ? ` Miesiąc: ${month.toUpperCase()}` :
            <strong> Niestety nie mamy informacji z podanego miesiąca :( </strong>}
    </h3>
        {allowMonths.includes(month.toUpperCase()) ? <div>
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
                    <SumCategoryInMonth idCategory={category.id} monthNumber={numberOfChosenMonth}/></tr>) : null}
                </tbody>
            </table>
            <SumAllCategoryInMonth month={numberOfChosenMonth}/>
            <Line/>
        </div> : null}
        {allowMonths.includes(month.toUpperCase()) ?
            <ConverterView/> : <div className="errBox"><h3>Wprowadź poprawną nazwę, aby sprawdzić wydatki</h3>
                <div className="err">Obraz <a
                    href="https://pixabay.com/pl/users/elisariva-1348268/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1700515"> Elisa</a> z <a
                    href="https://pixabay.com/pl//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1700515"> Pixabay</a>
                </div>
            </div>}
    </>
}
