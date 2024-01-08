import styled from "styled-components"
import { Link } from "react-router-dom"
export const Wrapper = styled.div`
    /* position: absolute; */
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: var(--turfpalColor);
    color: var(--white);
    display: flex;
    justify-content: space-around;
`

export const Icons = styled.div`
    padding: 10px 0 0 0;
    height: 5rem;
    width: 80%;
    display: flex;
    justify-content: space-around;

    svg {
        width: 30px;
        height: 30px;
        font-weight: 100;
    }
`

export const LinkItem = styled(Link)`
    color: var(--white);
`

export const IconWrapper = styled.div`
    position: relative;
`

export const NumberCircle = styled.div`
    position: absolute;
    top: -7px;
    right: -7px;
    background-color: #fcd3d2;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    font-size: var(--fontTiny);
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
`
