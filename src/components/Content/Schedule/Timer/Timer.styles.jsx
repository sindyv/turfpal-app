import styled from "styled-components"

export const Container = styled.div`
    max-width: var(--maxWidth);
    min-width: 380px;
    padding: var(--mainContentPadding);
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const CardContainer = styled.div`
    display: flex;
    gap: 12px;
    flex-direction: column;

    div {
        &:first-child {
            display: flex;
            align-items: center;
            gap: 12px;
        }
    }

    svg {
        color: var(--turfpalColor);
    }
`
export const CardContent = styled.div`
    font-size: var(--fontSuperSmall);
`
