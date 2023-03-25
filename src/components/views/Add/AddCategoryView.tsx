import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../common/Button/Button";

export const AddCategoryView = () => {
    const [form, setForm] = useState({
        name: ''
    });
    const saveNewCategory = async (e:SyntheticEvent) => {
        e.preventDefault();
        try {
            const res =  await fetch('http://localhost:3001/category', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body:JSON.stringify({
                    ...form
                })
            })
            const data = await res.json()
            console.log(data)
        } catch (err: any) {
            console.error(err.message)
        }
    }
    const saveForm = (key: string, value: string) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }
    return <>
        <form className="form" onSubmit={saveNewCategory}>
            <h2 className='add'>Dodaj kategorię</h2>
            <label>Nazwa</label>
            <input type="text" required maxLength={50} value={form.name} onChange={e => saveForm('name', e.target.value)}/>
            <Button text="Dodaj"/>
        </form>
    </>
}
