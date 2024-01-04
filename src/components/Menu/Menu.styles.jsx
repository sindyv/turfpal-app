import styled from "styled-components"

export const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: var(--turfpalColor);
    color: var(--white);
    display: flex;
    justify-content: space-around;
`

export const Icons = styled.div`
    padding: 10px 0 0 0;
    height: 5rem;
    width: 80%;
    display: flex;
    justify-content: space-around;

    svg {
        width: 30px;
        height: 30px;
        font-weight: 100;
    }
`
