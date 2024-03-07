import styled from "styled-components"
import { Link } from "react-router-dom"

import WavesOutlinedIcon from "@mui/icons-material/WavesOutlined"
export const Wrapper = styled.div`
    padding: var(--mainContentPadding);
    max-width: var(--maxWidth);
    width: 100%;
`

export const Header = styled.div`
    font-family: var(--turfpalFontBold);
    font-size: var(--fontMed);
    margin: 0 0 24px 0;
    display: flex;
    align-items: center;
    gap: 20px;

    svg {
        width: 24px;
    }
    a {
        display: flex;
        align-items: center;
    }
`

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) =>
        props.$control ? "var(--lightGrey)" : "var(--turfpalColor)"};
    padding: 8px;
    border: none;
    border-radius: 8px;
    gap: 12px;
    margin: 0 0 24px 0;
`

export const TileArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 24px;
`

export const HeatTile = styled(WavesOutlinedIcon)`
    rotate: 90deg;
`
export const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`
export const CardDescription = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: var(--turfpalFontBold);

    svg {
        color: var(--turfpalColor);
    }
`

export const LinkWrappers = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
