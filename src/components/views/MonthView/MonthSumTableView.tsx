import React from "react";
import "../../../styles/table.scss";
import {CategoryEntity} from "types";
import {SumCategoryInMonth} from "../../feature/Sum/SumCategoryInMonth";
import {TableHeader} from "../../common/TableHeader/TableHeader";

interface Props {
    categoriesData: CategoryEntity [] | null;
    chosenMonth: number | undefined;
}

export const MonthSumTableView = ({categoriesData, chosenMonth}: Props): JSX.Element => {
    return (<table>
            <TableHeader/>
            <tbody>
            {categoriesData ?
                categoriesData.map(category => <tr key={category.id}>
                    <td>{category.name}</td>
                    <SumCategoryInMonth idCategory={category.id} month={chosenMonth}/></tr>) : null}
            </tbody>
        </table>
    );
};
