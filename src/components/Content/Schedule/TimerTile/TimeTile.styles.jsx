import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: 12px;
    min-height: 120px;
    min-width: 150px;
    width: 100%;
    max-width: 200px;
    background: ${(props) =>
        props.$enabled ? "var(--turfpalColor)" : "var(--lightGrey)"};
    color: ${(props) =>
        props.$enabled ? "var(--white)" : "var(--turfpalColor)"};
    border-radius: 8px;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const HeaderTextArea = styled.div`
    font-size: var(--fontSuperSmall);
    display: flex;
    align-items: center;
    font-weight: 700;
    gap: 10px;
`
export const ValueArea = styled.div`
    margin: 12px 0 0 0;
    font-size: var(--fontSuperBig);
    font-family: var(--turfpalFontBold);
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        height: 40px;
        width: 40px;
    }
`
export const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`
