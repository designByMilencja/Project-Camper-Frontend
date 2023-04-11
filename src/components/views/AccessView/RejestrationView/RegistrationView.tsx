import React, {SyntheticEvent, useState} from "react";
import config from "../../../../config/config.json";
import {RegistrationEntity} from "types";
import "../../AddView/AddView.scss";
import {useNavigate} from "react-router-dom";
import {useForm} from "../../../../hooks/useForm";
import {Button} from "../../../common/Button/Button";
import {InputField} from "../../../common/InputField/InputField";
import {SubSubtitle} from "../../../common/SubSubtitle/SubSubtitle";
import {StatusResponse} from "../../../feature/StatusResponse/StatusResponse";
import {LoadingView} from "../../LoadingView/LoadingView";

export const RegistrationView = () => {
    const [user, setUser] = useForm<RegistrationEntity>({
        name: '',
        email: '',
        login: '',
        password: '',
    });
    const navigate = useNavigate();
    const [status, setStatus] = useState(0);
    const [loading, setLoading] = useState(false);

    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            setLoading(true);
            const {registration_url} = config;
            const res = await fetch(registration_url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    ...user
                })
            })
            const status = res.status;
            setStatus(status);
            if (status === 200) {
                navigate("/verify");
            }
            setLoading(false);
        } catch (err: any) {
            console.error(err.message);
            setLoading(false);
        }
    }

    return <>
        {loading ? <LoadingView/> :
            <form className="form" onSubmit={sendForm}>
                <SubSubtitle text="Formularz rejestracji"/>
                <InputField label='Imię:' type="text" name="name" value={user.name} minLength={3} maxLength={50}
                            onChange={setUser} required/>
                <InputField label="Email:" type="email" name="email" value={user.email} minLength={5} maxLength={50}
                            onChange={setUser} required/>
                <InputField label="Login:" type="text" name="login" value={user.login} minLength={5} maxLength={40}
                            onChange={setUser} required/>
                <InputField label="Hasło:" type="password" name="password" value={user.password} minLength={8}
                            maxLength={40} onChange={setUser} required/>
                <Button text="Zarejestruj" name="btn"/>
                <StatusResponse code={status} keyCategory="registration"/>
            </form>}
        <Button text="Przejdź do logowania" to="/admin" name="center" disabled={loading}/>
    </>
}
