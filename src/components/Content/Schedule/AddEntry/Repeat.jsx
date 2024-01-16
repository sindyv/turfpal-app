import React, { useState } from "react"

import { Wrapper, CardContent, Header } from "./Repeat.styles"

import Card from "../../../UI/Card"

import LoopOutlinedIcon from "@mui/icons-material/LoopOutlined"
import Btn from "../../../UI/Btn"

function Repeat({ onSelect, scheduleObject }) {
    const handleClick = (value) => {
        onSelect({ cmd_schedule_recurrence: value })
    }

    return (
        <Wrapper>
            <Header>
                <LoopOutlinedIcon />
                Repeat
            </Header>
            <Card>
                <CardContent>
                    <Btn
                        selected={scheduleObject.cmd_schedule_recurrence === 0}
                        backgroundColorSelected={"var(--turfpalActiveBtn)"}
                        backgroundColorDeselected={"var(--grey)"}
                        textColorSelected={"var(--turfpalColor)"}
                        textColorDeselected={"var(--turfpalColor)"}
                        customFont={"var(--turfpalFontBold)"}
                        onClick={() => handleClick(0)}
                    >
                        Off
                    </Btn>
                    <Btn
                        selected={scheduleObject.cmd_schedule_recurrence === 7}
                        backgroundColorSelected={"var(--turfpalActiveBtn)"}
                        backgroundColorDeselected={"var(--grey)"}
                        textColorSelected={"var(--turfpalColor)"}
                        textColorDeselected={"var(--turfpalColor)"}
                        customFont={"var(--turfpalFontBold)"}
                        onClick={() => handleClick(7)}
                    >
                        7 days
                    </Btn>
                    <Btn
                        selected={scheduleObject.cmd_schedule_recurrence === 14}
                        backgroundColorSelected={"var(--turfpalActiveBtn)"}
                        backgroundColorDeselected={"var(--grey)"}
                        textColorSelected={"var(--turfpalColor)"}
                        textColorDeselected={"var(--turfpalColor)"}
                        customFont={"var(--turfpalFontBold)"}
                        onClick={() => handleClick(14)}
                    >
                        14 days
                    </Btn>
                </CardContent>
            </Card>
        </Wrapper>
    )
}

export default Repeat
