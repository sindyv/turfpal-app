import React, { useContext, useEffect, useState } from "react"
import { Container } from "./Scan.styles"
import useDali from "../../../../../hooks/useDali"
import { DaliConfiguratorContext } from "../../../../../store/context/daliConfigurator-context"
function Scan() {
    const daliCtx = useContext(DaliConfiguratorContext)

    const { startScan, stopScan, scanStatus } = useDali()
    const [status, setStatus] = useState({
        status: "Not started",
        progress: 0,
        found: 0,
    })

    useEffect(() => {
        // Start scanning when component mounts
        startScan()

        // Stop scanning when component dismounts
        return () => {
            stopScan()
        }
    }, [])

    useEffect(() => {
        // Ask for progress every 1000ms
        const response = async () => {
            const status = await scanStatus()
            if (status.progress === 100) {
                const timer = setTimeout(() => {
                    daliCtx.controlScanning("cancel")
                    clearInterval(interval)
                }, 5000)
                daliCtx.getDevices()
            }
            setStatus(status)
        }

        const interval = setInterval(() => {
            response()
        }, 1000)

        // Clear interval Timer on dismount
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <Container>
            <span>
                <div>Status:</div>
                <div>{status.status}</div>
            </span>

            <span>
                <div>Found:</div>
                <div>{status.found}</div>
            </span>

            <span>
                <div>Progress:</div>
                <div>{Math.round(status.progress)}%</div>
            </span>
        </Container>
    )
}

export default Scan
