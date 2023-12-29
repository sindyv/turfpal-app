import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: var(--turfpalColor);
`

export const Content = styled.div`
    margin: 0 auto;
    max-width: var(--maxWidth);
    padding: 5px;
    color: var(--turfpalTextColor);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;

    .header__clock {
        margin: 0 20px 0 0;
    }
`

export const LogoImg = styled.img`
    width: 150px;
    margin: 5x 0 5px 0px;
    @media (max-width: 500px) {
        width: 100px;
    }
`

export const Hamburger = styled.span`
    width: 70px;
    padding-left: 5px;
    display: flex;
    align-items: center;
`
