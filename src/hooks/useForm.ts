import {SyntheticEvent, useState} from "react";

export const useForm = (fetchUrl: string, obj:any) => {
    const [form, setForm] = useState({obj});
    const [status, setStatus] = useState(0)
    const saveNew = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(fetchUrl, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    ...obj
                })
            })
            if (res.status === 200) {
                setStatus(200)
                setForm({obj})
            }
        } catch (err: any) {
            console.error(err.message)
        }
    }
    const saveForm = (key: any, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    }
    return [form, setForm, status, saveNew]
}
