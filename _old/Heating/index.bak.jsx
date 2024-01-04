import React, { useEffect, useState } from "react"

import Card from "../ui/Card"
import Gauge from "../ui/Gauge"
import Button from "../ui/Button"
import { Wrapper, Title, ValueDiv, Unit } from "./Heating.styles"

import { useFetchValues } from "../../hooks/useFetchValues"
import { useSendCommand } from "../../hooks/useSendCommand"

const Heating = () => {
    const { values, error } = useFetchValues()

    let [object, setObject] = useState({})
    const { fetchData } = useSendCommand()

    const handleClickAuto = async () => {
        setObject({
            command: {
                mode: "auto",
            },
        })
        console.log("click")
        const { response, error } = await fetchData(object)

        console.log(response)
    }

    return (
        <Card>
            <Wrapper>
                <Title>Heating</Title>
                <Gauge
                    value={values.temperature}
                    min={-10}
                    max={40}
                    low={10}
                    high={30}
                />
                <ValueDiv>{values.temperature}</ValueDiv>
                <Unit>°C</Unit>
                <Button
                    enabled={true}
                    selected={true}
                    handleClick={handleClickAuto}
                >
                    Auto
                </Button>
                <Button enabled={true}>Manual</Button>
                <Button>On</Button>
                <Button>Off</Button>
            </Wrapper>
        </Card>
    )
}

export default Heating
