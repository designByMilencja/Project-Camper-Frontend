import React from "react";
import "../../../styles/table.scss";
import {CategoryEntity} from "types";
import {SumCategoryInCountry} from "../../feature/Sum/SumCategoryInCountry";
import {TableHeader} from "../../common/TableHeader/TableHeader";

interface Props {
    categoriesData: CategoryEntity[] | null;
    chosenCountry: string | undefined;
}

export const CountrySumTableView = ({categoriesData, chosenCountry}: Props) => {
    return (<table>
            <TableHeader/>
            <tbody>
            {categoriesData ? categoriesData.map((category: CategoryEntity) => <tr key={category.id}>
                <td>{category.name}</td>
                <SumCategoryInCountry idCategory={category.id} idCountry={chosenCountry}/></tr>) : null}
            </tbody>
        </table>
    );
};
