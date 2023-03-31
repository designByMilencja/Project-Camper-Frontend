import {useEffect, useState} from "react";

type DataReturn = [any[], boolean]
export const useFetchAndLoading = (fetchUrl: string): DataReturn => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                setIsLoading(true)
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
            } catch (err) {
                console.error('Wystąpił błąd podczas próby wykonania zapytania');
            }
        };
        fetchData().then(null);
        setIsLoading(false)
    }, [fetchUrl])

    return [data, isLoading]
}

