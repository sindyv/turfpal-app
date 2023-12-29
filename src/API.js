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

    sendCommandPromise: async (command) => {
        console.log("test")
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
}
