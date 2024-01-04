import styled from "styled-components"

export const Wrapper = styled.div`
    border: 1px solid #cccccc;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    min-height: 200px;
    min-width: 200px;
    padding: 15px;
    color: rgb(85, 85, 85);
    background: rgb(245, 245, 245);
    animation: animateCard 500ms;

    @keyframes animateCard {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`
