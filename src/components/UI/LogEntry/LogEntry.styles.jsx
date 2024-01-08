import styled from "styled-components"

export const Wrapper = styled.div`
    padding: 0 10px;
`
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

export const Line = styled.div`
    border-left: 2px solid #ccc;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 10px;
    font-size: var(--fontSuperSmall);
`

export const Dot = styled.div`
    position: absolute;
    left: -6px;
    width: 10px;
    height: 10px;
    border: 1px solid;
    color: red;
    background-color: red;
    border-radius: 50%;
`
