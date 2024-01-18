import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: var(--mainContentPadding);
    max-width: var(--maxWidth);
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

export const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`
