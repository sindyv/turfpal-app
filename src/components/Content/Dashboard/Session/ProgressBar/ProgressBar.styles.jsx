import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
`

export const BarContainer = styled.div`
    background-color: var(--lightGrey);
    flex-grow: 1;
    border-radius: 4px;
`

export const Bar = styled.div`
    background-color: var(--turfpalActiveBtn);
    width: ${(props) => props.$progress}%;
    border: 1px solid var(--turfpalActiveBtn);
    border-radius: 4px;
    display: flex;
    align-items: center;
    color: var(--turfpalColor);
    padding: 2px;
    transition: width 1s;
`
