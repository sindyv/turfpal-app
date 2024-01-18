import styled from "styled-components"

export const Wrapper = styled.div`
    background: var(--lightGrey);
    border-radius: 8px;
    padding: 12px;

    animation: animateCardz 500ms;
    @keyframes animateCardz {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`
