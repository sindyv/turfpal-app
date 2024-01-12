import styled from "styled-components"
import { Link } from "react-router-dom"

export const Header = styled.div`
    font-family: var(--turfpalFontBold);
    font-size: var(--fontSmall);
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
export const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`
