import styled from "styled-components"

export const GaugeDiv = styled.div`
    width: 100%;
    max-width: 250px;

    .gauge__body {
        width: 100%;
        height: 0;
        padding-bottom: 50%;
        background: darkgrey;
        position: relative;
        border-top-left-radius: 100% 200%;
        border-top-right-radius: 100% 200%;
        overflow: hidden;
    }

    .gauge__fill {
        position: absolute;
        top: 100%;
        left: 0;
        width: inherit;
        height: 100%;
        background: ${(props) => `${props.$color}`};
        transform-origin: center top;
        transform: ${(props) => `rotate(${props.$value / 100 / 2}turn)`};
        transition: transform 1s ease-out;
    }

    .gauge__cover {
        width: 75%;
        height: 150%;
        position: absolute;
        border-radius: 50%;
        background-color: rgb(245, 245, 245);
        top: 25%;
        left: 50%;
        transform: translateX(-50%);

        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 25%;
    }
`
