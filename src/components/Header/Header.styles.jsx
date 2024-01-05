import styled from "styled-components"
import { Link } from "react-router-dom"
// Icons

export const Wrapper = styled.div`
    padding: 10px;
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
