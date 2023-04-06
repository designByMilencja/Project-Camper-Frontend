import React, {useState} from "react";
import config from "../../../../utils/config.json";
import {Button} from "../../../common/Button/Button";
import {handleErrors} from "../../../../utils/handleErrors";
import {StatusResponse} from "../../../common/StatusResponse/StatusResponse";
import {InputField} from "../../../common/InputField/InputField";

interface FormValues {
    name: string;
}

export const AddCategoryView = () => {
    const token: Readonly<string | null> = sessionStorage.getItem('token');
    const [form, setForm] = useState<FormValues>({
        name: ''
    });
    const [status, setStatus] = useState<number>(0)
    const saveNewCategory = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const {category_url} = config;
            const res: Response = await fetch(category_url, {
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
        setForm(prevState => ({
            ...prevState,
            [key]: value,
        }))
    }
    const clearInput = () => {
        setStatus(0)
    }
    return <>
        <form className="form" onSubmit={saveNewCategory}>
            <h3 className='add'>Dodaj kategorię</h3>
            <InputField label="Nazwa kategorii" type="text" name="name" value={form.name} onChange={e => saveForm('name', e.target.value)} minLength={4} maxLength={50} onMouseDown={clearInput} required/>
            <Button text="Dodaj kategorię" name="btn"></Button>
            <StatusResponse code={status}/>
        </form>
    </>
}
