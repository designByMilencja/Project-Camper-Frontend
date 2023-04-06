import React, {SyntheticEvent, useState} from "react";
import {Button} from "../../../common/Button/Button";
import '../../AddView/AddView.scss'
import {useForm} from "../../../../hooks/useForm";
import {InputField} from "../../../common/InputField/InputField";

interface Admin {
    name: string;
    email: string;
    login: string;
    password: string;
}

export const RegistrationView = () => {
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
        <InputField label='Imię:' type="text" name="name"  value={admin.name} minLength={3} maxLength={50} onChange={setAdmin} required/>
        <InputField label="Email:" type="email" name="email" value={admin.email} minLength={5} maxLength={50} onChange={setAdmin} required/>
        <InputField label="Login:" type="text" name="login" value={admin.login} minLength={5} maxLength={40} onChange={setAdmin} required/>
        <InputField label="Hasło:" type="password" name="password" value={admin.password} minLength={8} maxLength={40} onChange={setAdmin} required/>
        <Button text="Zarejestruj" name="btn"/>
        {status === 200 ? <p className="success">Zostałeś zarejestrowany, przejdź do logowania</p> : null}
        {status === 400 ? <p className="error">Odmowa rejestracji, sprawdź poprawność danych w formularzu </p> : null}
    </form>
    <Button text="Przejdź do logowania" to="/admin" name="center"/>
</>
}
