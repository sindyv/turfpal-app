import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    justify-content: space-between;

    span {
        font-size: var(--fontTiny);

        div {
            &:last-child {
                font-size: var(--fontSuperSmall);
            }
        }
    }
`
