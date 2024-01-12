import styled from "styled-components"

export const DayHeader = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    span {
        font-family: var(--turfpalFontBold);

        &:last-child {
            font-family: var(--turfpalFont);
        }
    }
    margin: 0 0 12px 0;
`
