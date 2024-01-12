import styled from "styled-components"
import { Link } from "react-router-dom"

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
    a {
        display: flex;
        align-items: center;
    }

    svg {
        width: 24px;
    }
`
export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
`
export const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`
