import styled from "styled-components"

export const Container = styled.div`
    background: ${(props) =>
        props.$selected ? "var(--turfpalActiveBtn)" : "var(--lightGrey)"};
    padding: 6px 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
        color: var(--turfpalColor);
    }

    transition: background-color 1s;
`
