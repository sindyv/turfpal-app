import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
`

export const CardContainer = styled.div`
    flex-grow: 1;
    font-size: var(--fontSuperSmall);
`

export const CardContent = styled.div`
    display: flex;
    align-items: center;

    svg {
        width: 18px;
        height: 18px;
    }
`
