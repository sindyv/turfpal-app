const url = `http://${import.meta.env.VITE_EXTERNAL_URL}/`

export default {
    sendCommand: async (command) => {
        return await (
            await fetch(url + "commands", {
                method: "POST",
                body: JSON.stringify(command),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json()
    },

    sendCommandWebSockets: async (command) => {
        const socket = new WebSocket(
            `ws://${import.meta.env.VITE_EXTERNAL_URL}/ws/nodered`
        )

        return new Promise((resolve, reject) => {
            socket.onopen = () => {
                const message = JSON.stringify({ payload: { ...command } })
                socket.send(message)
                socket.close()
                resolve("Message sendt")
            }
        })
    },

    fetchValues: async () => {
        return await (await fetch(url + "values")).json()
    },

    fetchRigdata: async () => {
        return await (await fetch(url + "rigData")).json()
    },

    fetchStatuses: async () => {
        return await (await fetch(url + "statuses")).json()
    },

    fetchAlarms: async () => {
        return await (await fetch(url + "alarms")).json()
    },

    fetchSchedule: async () => {
        return await (await fetch(url + "schedule")).json()
    },

    fetchAllValues: async () => {
        return await (await fetch(url + "all")).json()
    },

    fetchAllValuesWebSocket: async () => {
        const socket = new WebSocket(
            `ws://${import.meta.env.VITE_EXTERNAL_URL}/ws/nodered`
        )

        return new Promise((resolve, reject) => {
            socket.onopen = () => {
                const command = JSON.stringify({
                    payload: {
                        commands: {
                            request_status: "all",
                        },
                    },
                })
                socket.send(command)
            }

            socket.onerror = (error) => {
                reject(error)
            }

            socket.onmessage = (e) => {
                socket.close()

                resolve(JSON.parse(e.data).payload)
            }
        })
    },
}
