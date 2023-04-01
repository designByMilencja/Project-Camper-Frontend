import {useEffect, useState} from "react";
import {handleErrors} from "../utils";

export const useFetchAndLoading = <T, B>(fetchUrl: string): [T | null, B | boolean] => {

    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(fetchUrl, {
                    headers: {
                        'Content-type': 'application/json',
                    },
                });
                const data = await res.json();
                if (res.status !== 200) {
                    throw new Error('Wystąpił bład podczas pobrania danych')
                }
                setData(data);
                setIsLoading(false)
            } catch (err) {
                handleErrors(err)
            }
        };
        fetchData();
    }, [fetchUrl]);



    return [data, isLoading]
}

