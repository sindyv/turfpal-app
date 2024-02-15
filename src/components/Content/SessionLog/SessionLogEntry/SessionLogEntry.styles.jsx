import styled from "styled-components"
export const CardHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    font-size: var(--fontSuperSmall);

    div {
        &:last-child {
            font-size: var(--fontSmall);
        }
    }
`

export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`
export const CardContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    font-size: var(--fontSuperSmall);
`

export const CardDataField = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    font-size: var(--fontSuperSmall);

    div {
        &:first-child {
            font-size: var(--fontTiny);
        }
    }
`
