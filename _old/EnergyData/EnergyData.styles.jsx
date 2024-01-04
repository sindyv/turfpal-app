import styled from "styled-components"

export const Line = styled.div`
    display: flex;
    justify-content: space-between;

    width: 300px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    padding: 15px 10px;

    &:last-child {
        border-bottom: none;
        padding-bottom: 0px;
    }
`

export const Title = styled.h3`
    font-size: 1.1rem;
    padding: 0;
    margin: 0;
`
