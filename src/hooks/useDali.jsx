import DaliAPI from "../DaliAPI"

const useDali = () => {
    async function startScan() {
        return await DaliAPI.startScan()
    }

    async function stopScan() {
        return await DaliAPI.stopScan()
    }

    async function scanStatus() {
        return await DaliAPI.scanStatus()
    }

    return { startScan, stopScan, scanStatus }
}

export default useDali
