import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: 12px;
    background: var(--turfpalColor);
    border-radius: 8px;
    color: white;
    width: 100%;
`
export const Header = styled.div`
    font-family: var(--turfpalFontBold);
    font-size: var(--fontSmall);
    margin: 0 0 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    svg {
        width: 20px;
    }

    span {
        &:last-child {
            display: flex;
            align-items: center;
            gap: 12px;
        }
    }
`
export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
`
export const ContentLine = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const ContentField = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: var(--fontSuperSmall);
    svg {
        width: 20px;
    }
`

export const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`
