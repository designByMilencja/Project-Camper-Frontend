import {ChangeEvent, useState} from "react";

type UseForm<T> = [T, (e: ChangeEvent<HTMLInputElement>) => void];
export const useForm = <T>(initialValues: T): UseForm<T> => {
    const [form, setForm] = useState<T>(initialValues);
    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        setForm(prevForm => ({
            ...prevForm,
            [e.target.name]: e.target.value,
        }))
    }
    return [form, handleForm]
}
