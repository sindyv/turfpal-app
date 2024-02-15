import React, { useContext } from "react"

import { BtnContainer, Container } from "./Addressing.styles"

import Btn from "../../../../UI/Btn"
import Scan from "../Scan"

import { DaliConfiguratorContext } from "../../../../../store/context/daliConfigurator-context"

function Addressing({ scanning }) {
    const daliCtx = useContext(DaliConfiguratorContext)

    const handleStopScan = () => {
        daliCtx.controlScanning("cancel")
    }

    const handleStartScan = () => {
        daliCtx.controlScanning("start")
    }

    const handleResetAdresseing = () => {
        daliCtx.controlScanning("delete")
    }

    return (
        <Container>
            <BtnContainer>
                <Btn onClick={handleStartScan}>Scan for new devices</Btn>
                <Btn
                    backgroundColorDeselected='#ffa600'
                    textColorDeselected='#4f3402'
                    onClick={handleResetAdresseing}
                >
                    Reset adressing
                </Btn>
            </BtnContainer>
            {daliCtx.scanning ? (
                <>
                    <Btn
                        onClick={handleStopScan}
                        backgroundColorDeselected={"#ff0000"}
                    >
                        Stop scan
                    </Btn>
                    <Scan scanning={scanning} onFinish={handleStopScan} />
                </>
            ) : null}
        </Container>
    )
}

export default Addressing
