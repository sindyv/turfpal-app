import React from "react"

// Styles
import { Container } from "./Zone.styles"

// Icons
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined"

function Zone({ zone, allValues, onSetTimeZone }) {
    return (
        <Container
            $selected={zone.value === allValues?.setpoints?.timeZone}
            onClick={() => onSetTimeZone(zone.value)}
        >
            <AccessTimeOutlinedIcon />
            {zone.name}
        </Container>
    )
}

export default Zone
