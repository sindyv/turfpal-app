export default {
    sendCommand: async (command) => {
        return await (
            await fetch("http://localhost:3000/commands", {
                method: "POST",
                body: JSON.stringify(command),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json()
    },

    fetchValues: async () => {
        return await (await fetch("http://localhost:3000/values")).json()
    },

    fetchRigdata: async () => {
        return await (await fetch("http://localhost:3000/rigData")).json()
    },

    fetchStatuses: async () => {
        return await (await fetch("http://localhost:3000/statuses")).json()
    },

    fetchAlarms: async () => {
        return await (await fetch("http://localhost:3000/alarms")).json()
    },

    fetchSchedule: async () => {
        return await (await fetch("http://192.168.1.116:1880/schedule")).json()
    },

    fetchAllValues: async () => {
        return await (await fetch("http://localhost:3000/all")).json()
    },
}
