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
}
