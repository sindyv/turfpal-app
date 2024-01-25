import styled from "styled-components"

export const CardHeader = styled.div`
    font-size: var(--fontSmall);
    display: flex;
    align-items: center;
    margin: 0 0 12px 0;
    gap: 12px;
    svg {
        width: 18px;
        color: var(--turfpalColor);
    }
`
export const CardContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    font-size: var(--fontSuperSmall);
`
export const SwitchField = styled.div`
    display: flex;
    justify-content: space-between;
`
