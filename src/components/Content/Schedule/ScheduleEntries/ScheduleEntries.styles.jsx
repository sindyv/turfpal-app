import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: var(--mainContentPadding);
    max-width: var(--maxWidth);
    width: 100%;
`
export const Header = styled.div`
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: row;
    justify-content: end;

    span {
        font-family: var(--turfpalFontBold);
        font-size: var(--fontMed);
        display: flex;
        align-items: center;
        gap: 20px;

        a {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: var(--turfpalColor);
        }

        svg {
            width: 30px;
            height: 30px;
        }
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

export const ModalContent = styled.div`
    padding: 12px;

    button {
        border: 0px;
        color: var(--turfpalColor);
    }

    h3 {
        font-size: var(--fontSmall);
    }

    p {
        font-size: var(--fontTiny);
        border-bottom: 1px solid var(--borderColor);
        padding: 0 0 8px 0;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`
