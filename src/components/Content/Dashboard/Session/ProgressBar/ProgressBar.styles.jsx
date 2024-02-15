import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    align-items: center;
`

export const BarContainer = styled.div`
    background-color: var(--lightGrey);
    width: 100%;
    height: 1rem;
    border-radius: 4px;
`

export const Bar = styled.div`
    height: 1rem;
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

export const StartStop = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
