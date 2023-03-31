import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../../common/Button/Button";
import '../../AddView/AddCategoryAndCountryView/Add.css'
import {useForm} from "../../../../hooks/useForm";

interface Admin {
    name: string;
    email: string;
    login: string;
    password: string;
}

export const Registration = () => {
    const [admin, setAdmin] = useForm<Admin>({
        name: '',
        email: '',
        login: '',
        password: '',
    })
    const [status, setStatus] = useState(0)
    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:3001/registration', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    ...admin
                })
            })
            const status = res.status;
            setStatus(status)
        } catch (err: any) {
            console.error(err.message)
        }
    }
return <>
    <form className="form" onSubmit={sendForm}>
        <h3 className="add">Formularz rejestracji</h3>
        <label>Imię:</label>
        <input type="text" required maxLength={50} minLength={3} name="name" value={admin.name} onChange={setAdmin}/>
        <label>Email:</label>
        <input type="email" required maxLength={50} name="email" value={admin.email} onChange={setAdmin}/>
        <label>Login:</label>
        <input type="text" required maxLength={40} name="login" value={admin.login} onChange={setAdmin}/>
        <label>Hasło:</label>
        <input type="password" name="password" required maxLength={40} value={admin.password} onChange={setAdmin}/>
        <Button text="Zarejestruj" name="btn"/>
        {status === 200 ? <p className="success">Zostałeś zarejestrowany, przejdź do logowania</p> : null}
        {status === 400 ? <p className="error">Odmowa rejestracji, sprawdź poprawność danych w formularzu </p> : null}
    </form>
    <Button text="Przejdź do logowania" to="/login" name="center"/>
</>
}
