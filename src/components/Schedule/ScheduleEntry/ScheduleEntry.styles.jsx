import styled from "styled-components"

export const Wrapper = styled.div`
    /* display: none; */
    border-radius: 5px;
    position: relative;

    margin: 0 0 5px 0;
    background: rgb(255, 255, 255);
    padding: 10px;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
    animation: animateCard 500ms;

    @keyframes animateCard {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .monthSubDiv_wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: var(--fontSuperSmall);

        svg {
            width: 25px;
            height: 25px;
            color: red;
        }

        h3 {
            padding: 0;
            margin: 5px 0 5px 0;
            font-size: var(--fontMedium);
        }
    }

    .monthSubDiv__setpoints {
        font-size: var(--fontSuperSmall);
        margin: 15px 0 0 0px;
        text-align: right;
    }
`
