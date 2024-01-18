const url = `http://192.168.1.1/api/`

export default {
    login: async (command) => {
        return await (
            await fetch(url + "login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: { username: "admin", password: "TurfpalDev1024" },
            })
        ).json()
    },

    fetchValues: async () => {
        return await (await fetch(url + "values")).json()
    },
}
