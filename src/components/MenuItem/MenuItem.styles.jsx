import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
    cursor: pointer;
    background-color: red;
    width: 100%;
`

export const Content = styled(Link)`
    color: var(--turfpalTextColor);
    background: var(--turfpalColor);
    display: block;
    padding: 10px 0;
    width: 100%;
    text-align: center;
    &:hover {
        background: var(--turfpalHover);
    }

`
