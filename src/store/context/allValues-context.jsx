import { createContext } from "react"
import { useQuery } from "@tanstack/react-query"
import API from "../../API"
import { useQueryClient, useMutation } from "@tanstack/react-query"

export const AllValuesContext = createContext({})

const socket = new WebSocket(
    `ws://${import.meta.env.VITE_EXTERNAL_URL}/ws/nodered`
)

socket.addEventListener("open", () => {
    socket.send("Hi server!")
})

socket.addEventListener("message", (event) => {
    const data = JSON.parse(event.data)
    console.log(data.payload)
})

function AllValuesContextProvider({ children }) {
    const queryClient = useQueryClient()
    let invalidationDelay = 1500

    const valuesQuery = useQuery({
        queryKey: ["allValues"],
        queryFn: API.fetchAllValues,
        refetchInterval: 5000,
    })
    const commandMutation = useMutation({
        mutationFn: API.sendCommand,
        onSuccess: () => {
            setTimeout(() => queryClient.invalidateQueries(["allValues"]))
        },
    })

    const handleCommand = (command, delay = 1500) => {
        invalidationDelay = delay

        commandMutation.mutate({ ...command })
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
