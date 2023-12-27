import styled from "styled-components";

export const Wrapper = styled.div`
    border: 1px solid #cccccc;
    border-radius: 20px;
    box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
    max-height: 200px;
    min-width: 150px;
    padding: 20px;
    margin: 10px;

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