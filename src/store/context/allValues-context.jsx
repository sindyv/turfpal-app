import { createContext, useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import API from "../../API"
import { useQueryClient, useMutation } from "@tanstack/react-query"

export const AllValuesContext = createContext({})

const socket = new WebSocket(
    `ws://${import.meta.env.VITE_EXTERNAL_URL}/ws/nodered`
)

function AllValuesContextProvider({ children }) {
    const [allValues, setAllValues] = useState({})
    const queryClient = useQueryClient()
    let invalidationDelay = 1500

    const valuesQuery = useQuery({
        queryKey: ["allValues"],
        queryFn: API.fetchAllValuesWebSocket,
    })

    const commandMutation = useMutation({
        mutationFn: API.sendCommandWebSockets,
        onSuccess: () => queryClient.invalidateQueries(["allValues"]),
    })

    const handleCommand = (command, delay = 1500) => {
        invalidationDelay = delay

        commandMutation.mutate({ ...command })
    }

    const updateSetpointsCache = (setpoints) => {
        const queryData = {
            ...valuesQuery.data,
            setpoints: {
                ...valuesQuery.data.setpoints,
                ...setpoints,
            },
        }
        queryClient.setQueryData(["allValues"], queryData)
    }

    socket.onmessage = (event) => {
        // queryClient.invalidateQueries(["allValues"])
        const data = JSON.parse(event.data).payload
        queryClient.setQueryData(["allValues"], data)
        setAllValues(data)
    }

    return (
        <AllValuesContext.Provider
            value={{
                data: valuesQuery.data,
                isLoading: valuesQuery.isLoading,
                error: valuesQuery.error,
                onCommand: handleCommand,
                updateSetpointsCache,
            }}
        >
            {children}
        </AllValuesContext.Provider>
    )
}

export default AllValuesContextProvider
