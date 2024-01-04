import styled from "styled-components"

export const Btn = styled.button`
    background-color: ${(props) =>
        props.$selected ? "var(--turfpalActiveBtn)" : "var(--turfpalColor)"};
    color: ${(props) => (props.$selected ? "var(--turfpalColor)" : "#fff")};
    border: 1px solid;
    border-radius: 5px;
    padding: 10px;
    width: 200px;
    font-size: var(--fontMed);
    font-weight: 400;
    margin: 1px 0;
    opacity: ${(props) => (props.$enabled ? "1" : "0.7")};
    cursor: pointer;
`
