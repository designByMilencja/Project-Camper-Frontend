import React from "react";
import {CategoryEntity} from "types";

interface Props {
    form: { idCategory: string }
    categoriesData: CategoryEntity[] | null;
    saveForm: (name: string, value: string) => void;
}

export const SelectCategory = ({categoriesData, form, saveForm}: Props) => {
    return (<>
        <label>Kategoria zakupu</label>
        <select required name="category" value={form.idCategory} onChange={e => saveForm('idCategory', e.target.value)}>
            <option>--</option>
            {categoriesData?.map((category: CategoryEntity) => <option key={category.id} value={category.id}>{category.name}</option>) ?? []}
        </select>
    </>)
}
