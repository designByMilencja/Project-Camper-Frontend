import {useEffect, useState} from "react";
import {AddCategoryEntity} from 'types';

type CategoryAndLoading = [AddCategoryEntity[] | null, boolean]
export const useCategoryInfo = (): CategoryAndLoading => {
    const [categories, setCategories] = useState<AddCategoryEntity[] | null>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const res = await fetch('http://localhost:3001/categor');
                const data = await res.json();
                setCategories(data);
            } catch (e) {
                console.error('Błędne dane');
            }
        };
        fetchData().then(null);
        setIsLoading(false)
    }, [])

    return [categories, isLoading]
}

