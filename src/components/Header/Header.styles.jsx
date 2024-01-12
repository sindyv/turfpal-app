import styled from "styled-components"
import { Link } from "react-router-dom"
// Icons

export const Wrapper = styled.div`
    margin: 10px 0 0 0;
    padding: 10px 20px 10px 10px;
    display: flex;
    justify-content: space-between;
    font-family: "EuclidBold";
`

export const Icons = styled.div`
    color: var(--turfpalColor);
    display: flex;
    column-gap: 10px;
    svg {
        height: 24px;
        width: 24px;
    }
`

export const LinkItem = styled(Link)`
    color: var(--turfpalColor);
`
