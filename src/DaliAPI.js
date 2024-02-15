const url = `http://192.168.1.3/`

export default {
    startScan: async () => {
        return await (
            await fetch(url + "dali/scan", {
                method: "POST",
                body: JSON.stringify({
                    newInstallation: false,
                    noAddressing: false,
                    useLines: [],
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json()
    },
    updateDevice: async (id, name, group) => {
        return await (
            await fetch(url + "device/" + id, {
                method: "PUT",
                body: JSON.stringify({
                    name: name,
                    groups: [group],
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json()
    },

    stopScan: async () => {
        return await (
            await fetch(url + "dali/scan/cancel", {
                method: "POST",
            })
        ).json()
    },

    resetAddressing: async () => {
        return await (
            await fetch(url + "devices", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json()
    },

    controlDevice: async (id, value) => {
        return await fetch(`${url}device/${id}/control`, {
            method: "POST",
            body: JSON.stringify({
                switchable: value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
    },

    broadcast: async (value) => {
        return await fetch(`${url}broadcast/control`, {
            method: "POST",
            body: JSON.stringify({
                switchable: value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
    },

    scanStatus: async () => {
        return await (await fetch(url + "dali/scan")).json()
    },

    getDevices: async () => {
        return await (await fetch(url + "devices")).json()
    },
}
