import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: var(--mainContentPadding);
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
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--fontSuperSmall);
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
export const LinkItem = styled(Link)`
    text-decoration: none;
    color: black;
`
