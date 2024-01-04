import styled from "styled-components"

export const Wrapper = styled.div`
    background: #ccc;
    width: 100%;
    padding: 10px;
    .invisible {
        display: none;
    }
`
export const Clicker = styled.div`
    background: white;
    width: 100%;
`

export const Sub = styled.div`
    background: grey;
    width: 100%;
    animation: animateCard 500ms;

    @keyframes animateCard {
        from {
            opacity: 0;
        }
        to {
            height: 1;
        }
    }
`
