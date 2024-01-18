import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
    padding: 12px;
    background: ${(props) =>
        props.$active ? "var(--turfpalColor)" : "var(--lightGrey)"};
    border-radius: 8px;
    color: ${(props) =>
        props.$active ? "var(--white)" : "var(--turfpalColor)"};
    width: 100%;

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
        font-family: var(--turfpalFontBold);
        display: flex;
        align-items: center;
        gap: 12px;

        &:last-child {
            font-family: var(--turfpalFont);
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /* flex-direction: row;
    justify-content: space-between; */
`
export const ContentField = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: var(--fontSuperSmall);

    &:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        span {
            display: flex;
            align-items: center;

            &:last-child {
                width: 40%;
            }
        }
    }
    svg {
        width: 20px;
    }
`

export const LinkItem = styled(Link)`
    text-decoration: none;
    color: ${(props) =>
        props.$active ? "var(--white)" : "var(--turfpalColor)"};
`
