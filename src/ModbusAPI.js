const url = `http://192.168.1.2:1880/`

export default {
    updateAddress: async (oldAddress, selectedSensor) => {
        return await (
            await fetch(`${url}modbus/${oldAddress}`, {
                method: "PUT",
                body: JSON.stringify({
                    isNewSensor: true,
                    sensorType: selectedSensor,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            })
        ).json()
    },

    fetchValue: async (id) => {
        try {
            const response = await (await fetch(`${url}modbus/${id}`)).json()
            return response
        } catch (error) {
            return "Error fetching data"
        }
    },
}
