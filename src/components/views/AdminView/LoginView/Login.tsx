import React, {SyntheticEvent} from "react";
import {Button} from "../../../common/Button/Button";
import '../../AddView/AddCategoryAndCountryView/Add.css'
import {useForm} from "../../../../hooks/useForm";
import {useNavigate} from "react-router-dom";

interface Admin {
    login: string;
    password: string;
}

export const Login = () => {
    const [admin, setAdmin] = useForm<Admin>({
        login: '',
        password: '',
    });
    const navigate = useNavigate();
    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/login', {
                mode: 'cors',
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                    ...admin
                }),
            });

            if (response.ok) {
                const {token} = await response.json();
                sessionStorage.setItem('token', token);
                navigate('/add/category/country')
            } else {
                console.log('Invalid email or password');
            }
        } catch (err: any) {
            console.log(err)
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
        </form>
        <Button text="Powrót na stronę główną" to="/" name="center"/>
    </>
}
