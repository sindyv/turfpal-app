import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: var(--mainContentPadding);
`
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
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`
export const CardContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: space-between;
    font-size: var(--fontSuperSmall);
    width: 100%;
`

export const CardDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 12px 0;
    svg {
        color: var(--turfpalColor);
    }

    span {
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: var(--turfpalFontBold);
    }
`
export const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`
