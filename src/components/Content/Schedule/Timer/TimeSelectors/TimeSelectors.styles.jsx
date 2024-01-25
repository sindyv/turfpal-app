import styled from "styled-components"

export const TimeGroup = styled.div`
    display: flex;

    .main-div {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        gap: 24px;
    }

    .sub-div {
        display: flex;
        justify-content: center;
        width: 100%;

        div {
            width: 100%;

            display: flex;
            align-items: center;
        }
    }

    .icon {
        position: absolute;
        margin-left: 10px;
        color: var(--turfpalColor);
        width: 20px;
        height: 20px;
    }
`

export const Select = styled.select`
    border: 0;
    background-color: var(--lightGrey);
    padding: 12px 36px;
    border-radius: 8px;
    color: var(--medGrey);
    width: 100%;
    -o-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`
