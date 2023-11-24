import { useEffect, useState } from "react";

//универсальная функция для записи и чтения в LocalStorage
export function useLocalStorage(initialState, key){

    const getValue = () => {
        const value = JSON.parse(localStorage.getItem(key)) ?? initialState //считываение 
        return value
    }

    const [value, setValue] = useState(getValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value)) //запись в LocalStorage 
    }, [value])

    return [value, setValue]
}