import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
      
    @font-face {
            font-family: "Euclid";
            src: url("./src/fonts/EUCLIDSQUARE-REGULAR.TTF");
        }

    @font-face {
        font-family: "EuclidBold";
        src: url("./src/fonts/EUCLIDSQUARE-BOLD.TTF");
    }
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --borderColor: #cccccc;
        --lightGrey: #f3f3f3;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.2rem;
        --fontBig: 1.5rem;
        --fontmed: 1.2rem;
        --fontSmall: 1rem;
        --fontSuperSmall: 0.8rem;
        --fontTiny: 0.6rem;
        --fontSuperTiny: 0.4rem;
        --turfpalColor: #004e41;
        --turfpalTextColor: #dffb85;
        --turfpalHover: #355b56;
        --turfpalActiveBtn: #96e6cd;
        --turfpalFont : 'Euclid';
        --turfpalFontBold : 'EuclidBold'
    }

    * {
        box-sizing: border-box;
        font-family: 'Euclid', 'Open Sans', 'Abel',sans-serif; 

    }
    body {
        margin: 0;
        padding: 0;
        background-color: var(--white);



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
