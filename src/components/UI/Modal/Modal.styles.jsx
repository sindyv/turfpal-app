import styled from "styled-components"

export const Wrapper = styled.dialog`
    border: 1px solid #fff;
    border-radius: 8px;
    padding: 2px;
    overflow: hidden;

    &[open] {
        animation: slide-in-from-top 0.1s ease-out;
    }

    @keyframes slide-in-from-top {
        0% {
            transform: translateY(-15%);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
`
