import { createContext } from "react"
import { useQuery } from "@tanstack/react-query"
import API from "../../API"
import { useQueryClient, useMutation } from "@tanstack/react-query"

export const AllValuesContext = createContext({})

const socket = new WebSocket(
    `ws://${import.meta.env.VITE_EXTERNAL_URL}/ws/nodered`
)

function AllValuesContextProvider({ children }) {
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

    socket.onmessage = (event) => {
        const allValues = JSON.parse(event.data).payload
        queryClient.invalidateQueries(["allValues"])
    }

    return (
        <AllValuesContext.Provider
            value={{
                data: valuesQuery.data,
                isLoading: valuesQuery.isLoading,
                error: valuesQuery.error,
                onCommand: handleCommand,
            }}
        >
            {children}
        </AllValuesContext.Provider>
    )
}

export default AllValuesContextProvider
