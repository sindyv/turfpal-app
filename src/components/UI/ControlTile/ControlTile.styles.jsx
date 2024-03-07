import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: 12px;
    min-height: 120px;
    width: 100%;
    max-width: 250px;
    background: ${(props) =>
        props.$enabled ? "var(--turfpalColor)" : "var(--lightGrey)"};
    color: ${(props) =>
        props.$enabled ? "var(--white)" : "var(--turfpalColor)"};

    border-radius: 8px;

    transition: background-color 500ms, color 500ms;

    animation: animateCardz 500ms;
    @keyframes animateCardz {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
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
    svg {
        height: 18px;
        width: 18px;

        fill: ${(props) =>
            props.$enabled ? "var(--white)" : "var(--turfpalColor)"};

        color: ${(props) =>
            props.$enabled ? "var(--white)" : "var(--turfpalColor)"};
    }
`
export const ValueArea = styled.div`
    margin: 12px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        font-size: var(--fontSuperBig);
        font-family: var(--turfpalFontBold);
        &:last-child {
            font-size: var(--fontMed);
        }
    }
`

export const DataArea = styled.div`
    display: flex;
    justify-content: space-around;
    font-size: var(--fontSmall);
    margin: 16px 0 0 0;
`

export const Units = styled.span`
    font-size: var(--fontTiny);
`
export const LinkItem = styled(Link)`
    text-decoration: none;
    color: ${(props) =>
        props.$enabled ? "var(--white)" : "var(--turfpalColor)"};
    padding: 0;
`

export const MainValueUnit = styled.div`
    font-size: var(--fontMed);
    font-family: var(--tufpalFontBold);
`
