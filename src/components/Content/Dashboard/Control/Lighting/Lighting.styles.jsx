import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: var(--mainContentPadding);
    max-width: var(--maxWidth);
    min-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: var(--turfpalColor);
    padding: 8px;
    border: 1px solid var(--turfpalColor);
    border-radius: 8px;
    gap: 12px;
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
