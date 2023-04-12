import React from "react";

interface Props {
    label: string;
    type: string;
    name: string;
    value: string | number;
    maxLength?: number;
    minLength?: number;
    min?: number;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onMouseDown?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField =
    ({label, type, name, value, minLength, maxLength, required = false, onChange}: Props) => {
        return (
            <>
                <label>{label}</label>
                <input
                    type={type}
                    name={name}
                    value={value}
                    minLength={minLength}
                    maxLength={maxLength}
                    onChange={onChange}
                    required={required}
                />
            </>
        )
    }
