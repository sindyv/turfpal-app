import styled from "styled-components"
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined"

export const TileArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
`

export const HeatTile = styled(WavesOutlinedIcon)`
    rotate: 90deg;
`
