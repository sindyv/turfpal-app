import { useState, useEffect } from "react"
import API from "../API"

export const useFetchRigData = () => {
    const [error, setError] = useState(false)
    const [rigData, setRigData] = useState({})

    const fetchData = async () => {
        try {
            setError(false)

            const rigData = await API.fetchRigData()
            setRigData(rigData)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { rigData, error }
}
