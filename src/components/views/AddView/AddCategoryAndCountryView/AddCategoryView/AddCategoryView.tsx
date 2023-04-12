import React, {useState} from "react";
import {apiUrl} from "../../../../../config/api";
import {CategoryEntity} from "types";
import {handleErrors} from "../../../../../utils/handleErrors";
import {Button} from "../../../../common/Button/Button";
import {StatusResponse} from "../../../../feature/StatusResponse/StatusResponse";
import {InputField} from "../../../../common/InputField/InputField";
import {SubSubtitle} from "../../../../common/SubSubtitle/SubSubtitle";

export const AddCategoryView = () => {
    const token: Readonly<string | null> = sessionStorage.getItem('token');
    const [form, setForm] = useState<CategoryEntity>({name: ''});
    const [status, setStatus] = useState<number>(0)
    const saveNewCategory = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res: Response = await fetch(`${apiUrl}/category`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    ...form
                })
            })
            const status = res.status;
            setStatus(status)
            setForm({name: ""})
        } catch (err) {
            handleErrors(err);
        }
    }
    const saveForm = (key: string, value: string) => {
        setForm(prevState => ({...prevState, [key]: value}));
    }
    const clearInput = () => {
        setStatus(0)
    }
    return <>
        <form className="form" onSubmit={saveNewCategory}>
            <SubSubtitle text="Dodaj kategorię"/>
            <InputField label="Nazwa kategorii" type="text" name="name" value={form.name}
                        onChange={e => saveForm('name', e.target.value)} minLength={4} maxLength={50}
                        onMouseDown={clearInput} required/>
            <Button text="Dodaj kategorię" name="btn"></Button>
            <StatusResponse code={status} keyCategory="category"/>
        </form>
    </>
}
