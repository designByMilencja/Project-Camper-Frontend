import React, {useMemo, useState} from "react";
import {Button} from "../../../common/Button/Button";
import '../../AddView/AddView.scss'
import {useForm} from "../../../../hooks/useForm";
import {useNavigate} from "react-router-dom";
import {handleErrors} from "../../../../utils";

interface Admin {
    login: string;
    password: string;
}

export const LoginView = () => {
    const [status, setStatus] = useState<number>(0)
    const [admin, setAdmin] = useForm<Admin>({
        login: '',
        password: '',
    });

    const navigate = useNavigate();
    const body = useMemo(() => JSON.stringify({...admin}), [admin]);
    const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/login', {
                mode: 'cors',
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body,
            });

            if (response.ok) {
                const {token} = await response.json();
                sessionStorage.setItem('token', token);
                navigate('/add/category/country')
            } else {
                setStatus(401)
                throw new Error('Nieprawidłowy login lub hasło')
            }
        } catch (err) {
           handleErrors(err);
        }
    }
    return <>
        <form className="form" onSubmit={sendForm}>
            <h3 className="add">Formularz logowania</h3>
            <label>Login:</label>
            <input type="text" required maxLength={50} name="login" value={admin.login} onChange={setAdmin}/>
            <label>Hasło:</label>
            <input type="password" name="password" required maxLength={50} value={admin.password} onChange={setAdmin}/>
            <Button text="Zaloguj" name="btn"/>
            { status ===401 ? <p className='error'>Nieprawidłowy login lub hasło</p> : null}
        </form>
        <Button text="Powrót na stronę główną" to="/" name="center"/>
    </>
}
