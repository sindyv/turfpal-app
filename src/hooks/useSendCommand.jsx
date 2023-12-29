import { useState, useEffect } from "react"
import API from "../API"

export const useSendCommand = () => {
    const [error, setError] = useState(false)
    const [response, setResponse] = useState({})

    const fetchData = async (command) => {
        try {
            setError(false)

            const response = await API.sendCommand(command)
            setResponse(response)
        } catch (error) {
            setError(true)
        }

        return { response, error }
    }

    return { fetchData }
}
