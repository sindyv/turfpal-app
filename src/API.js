export default {
    sendCommandPromise: async (command) => {
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

    fetchValuesPromise: async () => {
        return await (await fetch("http://localhost:3000/values")).json()
    },

    fetchRigdataPromise: async () => {
        return await (await fetch("http://localhost:3000/rigData")).json()
    },

    fetchStatusesPromise: async () => {
        return await (await fetch("http://localhost:3000/statuses")).json()
    },

    fetchAlarmsPromise: async () => {
        return await (await fetch("http://localhost:3000/alarms")).json()
    },
}
