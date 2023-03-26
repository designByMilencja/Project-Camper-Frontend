import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../common/Button/Button";

export const AddCountry = () => {
    const [form, setForm] = useState({
        name: '',
        currency: '',
    });
    const [status, setStatus] = useState(0)
    const saveNewCountry = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/country', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body:JSON.stringify({
                    ...form
                })

            })
           const status = res.status;
            setStatus(status)
            setForm({name: "", currency: ''})

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
    const clearInput = () => {
        setStatus(0)
    }
    return <>
        <form className="form" onSubmit={saveNewCountry}>
            <h3 className='add'>Dodaj kraj</h3>
            <label>Nazwa kraju</label>
            <input type="text" required maxLength={60} value={form.name}
                   onChange={e => saveForm('name', e.target.value)} onMouseDown={clearInput}/>
            <label>Symbol waluty kraju</label>
            <input type="text" required value={form.currency} onChange={e => saveForm('currency', e.target.value)}/>
            <Button text="Dodaj kraj" name="btn" />
            {status === 200 ? <p className="success">Kraj został dodany pomyślnie</p> : null}
            {status === 400 ? <p className="error">Kraj istnieje, przejdź do dodania wydatku </p> : null}
            {status === 500 ? <p className="error">Przepraszamy nie dysponujemy przelicznikiem dla tej waluty, proponujemy wpisanie USD lub EUR </p> : null}
        </form>
    </>
}
