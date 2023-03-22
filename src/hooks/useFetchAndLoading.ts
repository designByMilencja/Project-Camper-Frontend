import {useEffect, useState} from "react";
type Data = [any[], boolean]
export const useFetchAndLoading = (fetchUrl:string): Data => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(fetchUrl);
                const data = await res.json();
                setData(data);
            } catch (e) {
                console.error('Błędne dane');
            }
        };
        fetchData().then(null);
        setIsLoading(false)
    }, [])

    return [data, isLoading]
}

