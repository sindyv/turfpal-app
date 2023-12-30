import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --borderColor: #cccccc;
        --lightGrey: #f3f3f3;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontmed: 1.2rem;
        --fontSmall: 1rem;
        --fontSuperSmall: 0.8rem;
        --turfpalColor: #1b4d41;
        --turfpalTextColor: #dffb85;
        --turfpalHover: #355b56;
        --turfpalActiveBtn: #96e6cd;
    }

    * {
        box-sizing: border-box;
        font-family: 'Open Sans', 'Abel',sans-serif;
        }
    body {
        margin: 0;
        padding: 0;
        background-color: var(--lightGrey);


        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--turfpalColor)
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
        }

        p {
            font-size: 1rem;
            color: var(--turfpalColor);
        }
    }
`
