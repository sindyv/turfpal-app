import React from "react"
import { Wrapper, SymbolDiv, TextDiv } from "./StatusCard.styles"

import WarningIcon from "@mui/icons-material/Warning"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const StatusCard = ({
    children,
    ActiveIcon = WarningIcon,
    InactiveIcon = CheckCircleIcon,
    title,
    activeText,
    inactiveText,
    active,
    activePrimaryColor = "#fcd3d2",
    activeSecondaryColor = "#811211",
    inactivePrimaryColor = "#e6eed1",
    inactiveSecondaryColorColor = "#5e6919",
}) => {
    return (
        <Wrapper
            $active={active}
            $activePrimaryColor={activePrimaryColor}
            $activeSecondaryColor={activeSecondaryColor}
            $inactivePrimaryColor={inactivePrimaryColor}
            $inactiveSecondaryColor={inactiveSecondaryColorColor}
        >
            <SymbolDiv>{active ? <ActiveIcon /> : <InactiveIcon />}</SymbolDiv>
            <TextDiv>
                <h3>{title}</h3>
                {active ? activeText : inactiveText}
            </TextDiv>
        </Wrapper>
    )
}

export default StatusCard
