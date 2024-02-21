import React from "react"

import { Wrapper, CardContent, Header } from "./Mode.styles"

import Card from "../../../UI/Card"

import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined"
import Btn from "../../../UI/Btn"

function Mode({ scheduleObject, onSelect }) {
    const handleClick = (value) => {
        onSelect({ cmd_schedule_value: value })
    }

    return (
        <Wrapper>
            <Header>
                <LoopOutlinedIcon />
                Mode
            </Header>
            <Card>
                <CardContent>
                    <Btn
                        selected={scheduleObject.cmd_schedule_value === 0}
                        backgroundColorSelected={"var(--turfpalActiveBtn)"}
                        backgroundColorDeselected={"var(--grey)"}
                        textColorSelected={"var(--turfpalColor)"}
                        textColorDeselected={"var(--turfpalColor)"}
                        customFont={"var(--turfpalFontBold)"}
                        onClick={() => handleClick(0)}
                    >
                        Default
                    </Btn>
                    <Btn
                        selected={scheduleObject.cmd_schedule_value === 1}
                        backgroundColorSelected={"var(--turfpalActiveBtn)"}
                        backgroundColorDeselected={"var(--grey)"}
                        textColorSelected={"var(--turfpalColor)"}
                        textColorDeselected={"var(--turfpalColor)"}
                        customFont={"var(--turfpalFontBold)"}
                        onClick={() => handleClick(1)}
                    >
                        Summer
                    </Btn>
                    <Btn
                        selected={scheduleObject.cmd_schedule_value === 2}
                        backgroundColorSelected={"var(--turfpalActiveBtn)"}
                        backgroundColorDeselected={"var(--grey)"}
                        textColorSelected={"var(--turfpalColor)"}
                        textColorDeselected={"var(--turfpalColor)"}
                        customFont={"var(--turfpalFontBold)"}
                        onClick={() => handleClick(2)}
                    >
                        Winter
                    </Btn>
                    {/* <Btn
                        selected={scheduleObject.cmd_schedule_value === 3}
                        backgroundColorSelected={"var(--turfpalActiveBtn)"}
                        backgroundColorDeselected={"var(--grey)"}
                        textColorSelected={"var(--turfpalColor)"}
                        textColorDeselected={"var(--turfpalColor)"}
                        customFont={"var(--turfpalFontBold)"}
                        onClick={() => handleClick(3)}
                    >
                        Custom
                    </Btn> */}
                </CardContent>
            </Card>
        </Wrapper>
    )
}

export default Mode
