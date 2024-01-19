import styled from "styled-components"

export const Container = styled.div``

export const Bar = styled.div`
    background-color: var(--turfpalActiveBtn);
    width: ${(props) => props.$progress}%;
    border: 1px solid var(--turfpalActiveBtn);
    border-radius: 2px;
    display: flex;
    align-items: center;
    color: var(--turfpalColor);
    padding: 2px;
    transition: width 1s;
`
