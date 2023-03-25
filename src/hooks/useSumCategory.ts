import {useEffect, useState} from "react";

type UseSumCategory = [number | null, boolean];
export const useSumCategory = (): UseSumCategory => {
    const [sum, setSum] = useState(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const idCategory = '';
        const month = 3;
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(`http://localhost:3001/payment/sum/month/${idCategory}/${month}`);
                const data = await res.json();
                setSum(data);
            } catch (e) {
                console.error('Błędne dane', e);
            }
        };
        fetchData().then(null);
        setIsLoading(false)
    }, [])
    return [sum, isLoading]
}

