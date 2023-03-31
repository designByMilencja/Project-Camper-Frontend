import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../../common/Button/Button";
import '../../../common/Button/Button.css'
import {useNavigate} from "react-router-dom";

export const AddCategory = () => {
    const [form, setForm] = useState({
        name: ''
    });
    const token = sessionStorage.getItem('token');
    const [status, setStatus] = useState(0)
    const saveNewCategory = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/category', {
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
    const navigate = useNavigate()
    function logout() {
        sessionStorage.removeItem('token');
        navigate('/login')
    }

    return <>
        <form className="form" onSubmit={saveNewCategory}>
            <h3 className='add'>Dodaj kategorię</h3>
            <label>Nazwa kategorii</label>
            <input type="text" required minLength={4} maxLength={50} value={form.name}
                   onChange={e => saveForm('name', e.target.value)} onMouseDown={clearInput}/>
            <Button text="Dodaj kategorię" name="btn"></Button>
            {status === 200 ? <p className="success">Kategoria została dodana pomyślnie</p> : null}
            {status === 400 ? <p className="error">Kategoria istnieje, przejdź do dodania kraju </p> : null}
        </form>
        <button className="center" onClick={logout}>Wyloguj</button>
    </>
}
