import React, {useState} from "react";
import {Button} from "../../../common/Button/Button";
import '../../../common/Button/Button.scss'
import {handleErrors} from "../../../../utils";
interface FormValues {
    name:string;
}
export const AddCategoryView = () => {
    const [form, setForm] = useState<FormValues>({
        name: ''
    });
    const token:Readonly<string|null> = sessionStorage.getItem('token');
    const [status, setStatus] = useState<number>(0)
    const saveNewCategory = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res:Response = await fetch('http://localhost:3001/category', {
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
            <label>Nazwa kategorii</label>
            <input type="text" required minLength={4} maxLength={50} value={form.name}
                   onChange={e => saveForm('name', e.target.value)} onMouseDown={clearInput}/>
            <Button text="Dodaj kategorię" name="btn"></Button>
            {status === 200 ? <p className="success" key="success">Kategoria została dodana pomyślnie</p> : null}
            {status === 400 ? <p className="error" key="error">Kategoria istnieje, przejdź do dodania kraju </p> : null}
        </form>
    </>
}
