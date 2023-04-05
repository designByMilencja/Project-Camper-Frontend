import React from "react";
import {CategoryEntity} from "types";
import {SumCategoryInMonth} from "../../Sum/SumCategoryInMonth";

interface Props {
    categoriesData: CategoryEntity [] | null;
    chosenMonth: number | undefined;
}

export const CategorySumTable = ({categoriesData, chosenMonth}: Props): JSX.Element => {
    return (
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
    );
};
