import React, {useMemo, useState} from "react";
import {LoginEntity} from "types";
import config from "../../../../config/config.json";
import '../../AddView/AddView.scss'
import {useForm} from "../../../../hooks/useForm";
import {useNavigate} from "react-router-dom";
import {handleErrors} from "../../../../utils/handleErrors";
import {Button} from "../../../common/Button/Button";
import {InputField} from "../../../common/InputField/InputField";
import {SubSubtitle} from "../../../common/SubSubtitle/SubSubtitle";
import {StatusResponse} from "../../../feature/StatusResponse/StatusResponse";
import {LoadingView} from "../../LoadingView/LoadingView";

export const LoginView = () => {
    const [status, setStatus] = useState<number>(0);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useForm<LoginEntity>({
        login: '',
        password: '',
    });
    const navigate = useNavigate();
    const body = useMemo(() => JSON.stringify({...user}), [user]);
    const sendForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            const {login_url} = config;
            const response = await fetch(login_url, {
                mode: 'cors',
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body,
            });

            if (response.ok) {
                const {token} = await response.json();
                sessionStorage.setItem('token', token);
                navigate('/add/category/country');
                setLoading(false);
            } else {
                setStatus(401);
                setLoading(false);
            }
        } catch (err) {
            handleErrors(err);
        }
    }
    return (<>
        {loading ? <LoadingView/> :
            <form className="form" onSubmit={sendForm}>
                <SubSubtitle text="Formularz logowania"/>
                <InputField label="Login:" type="text" name="login" value={user.login} onChange={setUser} required/>
                <InputField label="Hasło:" type="password" name="password" value={user.password} onChange={setUser}
                            required/>
                <Button text="Zaloguj" name="btn"/>
                <StatusResponse code={status} keyCategory="error"/>
            </form>}
    </>)
}
