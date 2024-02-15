import styled from "styled-components"
import { Link } from "react-router-dom"
// Icons

export const Wrapper = styled.div`
    position: relative;
    padding: 30px 20px 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "EuclidBold";
`

export const Icons = styled.div`
    color: var(--turfpalColor);
    display: flex;
    column-gap: 10px;
    svg {
        height: 24px;
        width: 24px;
    }

    .show {
        display: block;
    }
`

export const LinkItem = styled(Link)`
    color: var(--turpalColor);
    text-decoration: none;
    display: flex;
    align-items: center;
    font-family: var(--fontTurfpalBold);
    font-size: var(--fontMed);
    gap: 12px;
`

export const HeaderText = styled.div`
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--fontTurfpalBold);
    font-size: var(--fontMed);
    gap: 12px;
`

export const Menu = styled.div`
    display: ${(props) => (props.$view ? "block" : "none")};

    position: absolute;
    top: 40px;
    z-index: 1;
    background: var(--white);
    right: 40px;

    border-radius: 4px;

    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
        0px 8px 10px 1px rgba(0, 0, 0, 0.14),
        0px 3px 14px 2px rgba(0, 0, 0, 0.12);

    overflow: hidden;

    animation: animateMenu 500ms;
    @keyframes animateMenu {
        from {
            opacity: 0;
            height: 0px;
        }
        to {
            opacity: 1;
            height: 315px;
        }
    }
`

export const MenuHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;

    h3 {
        padding: 0;
        margin: 0;
        font-size: var(--fontSmall);
        font-family: var(--turfpalFont);
        font-weight: 100;
    }

    p {
        font-size: var(--fontTiny);
        padding: 0;
        margin: 0;
    }
`

export const MenuOptions = styled.div`
    border-top: 1px solid var(--borderColor);
    border-bottom: 1px solid var(--borderColor);

    display: flex;
    flex-direction: column;
    gap: 0px;

    div {
        span {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        &:hover {
            background: rgba(0, 0, 0, 0.05);
        }
        padding: 12px 12px 12px 12px;
    }
`

export const MenuSignOut = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;

    &:hover {
        background: rgba(0, 0, 0, 0.05);
    }
`
