import { createContext, useState } from "react"
import useDali from "../../hooks/useDali"
import DaliAPI from "../../DaliAPI"

export const DaliConfiguratorContext = createContext()

function DaliConfiguratorContextProvider({ children }) {
    const [selected, setSelected] = useState([])
    const [devices, setDevices] = useState({})
    const [scanning, setScanning] = useState(false)

    const { stopScan } = useDali()

    function clearSelected() {
        setSelected([])
    }

    function selectAll() {
        for (const device of devices.devices) {
            setSelected((prev) => [...prev, device.id])
        }
    }

    function controlScanning(action) {
        if (action === "start") {
            setScanning(true)
        } else if (action === "cancel") {
            setScanning(false)
            stopScan()
        } else if (action === "delete") {
            const resetAdressing = async () => {
                const response = await DaliAPI.resetAddressing()
                getDevices()
                return response
            }
            resetAdressing()
        }
    }

    async function getDevices() {
        const devices = await DaliAPI.getDevices()
        setDevices(devices)
    }

    function controlDevice(id, value) {
        DaliAPI.controlDevice(id, value)
    }

    function handleSelectedEcgs(id) {
        // handle selection boxes
        if (selected.indexOf(id) === -1) {
            setSelected((prev) => {
                return [...prev, id]
            })
        } else {
            setSelected((prev) => {
                const newArray = prev.filter((item) => item !== id)
                return newArray
            })
        }
    }

    async function updateDevices(name, group) {
        for (const id of selected) {
            await DaliAPI.updateDevice(id, name, group)
        }

        getDevices()
    }

    function controlAll(value) {
        DaliAPI.broadcast(value)

        if (value) {
            selectAll()
        } else if (!value) {
            clearSelected()
        }
    }

    const daliCtx = {
        selected,
        scanning,
        devices,
        clearSelected,
        controlScanning,
        getDevices,
        controlDevice,
        handleSelectedEcgs,
        updateDevices,
        controlAll,
    }

    return (
        <DaliConfiguratorContext.Provider value={daliCtx}>
            {children}
        </DaliConfiguratorContext.Provider>
    )
}

export default DaliConfiguratorContextProvider
