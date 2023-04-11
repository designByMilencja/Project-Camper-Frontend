import React from "react";

interface FormValues {
    name: string;
}

export const handleSaveForm = (key: string, value: string, setForm: React.Dispatch<React.SetStateAction<FormValues>>) => {
    setForm(prevState => ({
        ...prevState,
        [key]: value,
    }));
};
