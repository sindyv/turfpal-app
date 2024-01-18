import styled from "styled-components"

export const Line = styled.div`
    border-left: 2px solid #ccc;
    /* display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; */

    display: grid;
    grid-template-columns: 3fr 3fr 3fr 4fr;
    justify-items: center;
    align-items: center;
    position: relative;
    padding: 10px;
    font-size: var(--fontSuperSmall);

    span {
        &::first-letter {
            text-transform: capitalize;
        }
    }
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
