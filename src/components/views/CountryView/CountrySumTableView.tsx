import React from "react";
import {CategoryEntity} from "types";
import {SumCategoryInCountry} from "../../Sum/SumCategoryInCountry";

interface Props {
    categoriesData: CategoryEntity[] | null;
    chosenCountry: string | undefined;
}

export const CountrySumTableView = ({categoriesData, chosenCountry}: Props) => {
    return (<table>
        <thead>
        <tr>
            <th>Kategoria</th>
            <th>Suma</th>
        </tr>
        </thead>
        <tbody>
        {categoriesData ? categoriesData.map((category: CategoryEntity) => <tr key={category.id}>
            <td>{category.name}</td>
            <SumCategoryInCountry idCategory={category.id} idCountry={chosenCountry}/></tr>) : null}
        </tbody>
    </table>)
}
