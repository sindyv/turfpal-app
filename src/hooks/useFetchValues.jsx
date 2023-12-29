import { useState, useEffect } from "react"
import API from "../API"

export const useFetchValues = () => {
    const [error, setError] = useState(false)
    const [values, setValues] = useState({})

    const fetchData = async () => {
        try {
            setError(false)

            const values = await API.fetchValues()
            setValues(values)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { values, error }
}
