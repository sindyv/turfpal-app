import styled from "styled-components"

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
    color: ${(props) => props.$color};
    background: ${(props) => props.$color};
    border-radius: 50%;
`
