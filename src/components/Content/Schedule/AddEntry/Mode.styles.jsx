import styled from "styled-components"

export const Wrapper = styled.div``

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    color: var(--turfpalColor);
`

export const CardContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    /* display: flex;
    align-items: center;
    justify-content: space-between; */
`
