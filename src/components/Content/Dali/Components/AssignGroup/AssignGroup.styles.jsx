import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 12px;
        div {
            display: flex;
            gap: 12px;
            align-items: center;
        }
    }

    input {
        width: 30%;
        padding: 6px;
        border-radius: 6px;
        border: 0;
        background-color: var(--lightGrey);
    }

    label {
        font-size: var(--fontSuperSmall);
    }
`

export const Select = styled.select`
    border: 0;
    background-color: var(--lightGrey);
    padding: 6px 36px;
    border-radius: 6px;
    color: var(--Grey);
    -o-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`
