import { useEffect, useState } from "react";

export function useLocalStorage(initialState, key){

    const getValue = () => {
        const value = JSON.parse(localStorage.getItem(key)) ?? initialState  
        return value
    }

    const [value, setValue] = useState(getValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}