import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: var(--mainContentPadding);
    min-width: 380px;
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const ButtonsArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    background-color: var(--turfpalColor);
    padding: 6px;
    border-radius: 8px;
`

export const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`
