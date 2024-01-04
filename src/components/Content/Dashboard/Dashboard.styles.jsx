import styled from "styled-components"
import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined"
export const Wrapper = styled.div`
    padding: 8px;
`

export const Header = styled.div`
    font-family: var(--turfpalFontBold);
    margin: 0 0 24px 0;
`

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin: 0 0 24px 0;
`

export const TileArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
`

export const HeatTile = styled(WavesOutlinedIcon)`
    rotate: 90deg;
`
