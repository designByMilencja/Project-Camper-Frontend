import {useEffect, useState} from "react";

export const useMonth = () => {
    const [monthsAndNumbers, setMonthsAndNumbers] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = await fetch('http://localhost:3001/month');
                const data = await res.json();
                setMonthsAndNumbers(data)
            } catch (e) {
                console.error('Błędne dane');
            }
        };
        fetchData().then(null);
        setIsLoading(false)

    }, [])
    return monthsAndNumbers
}
