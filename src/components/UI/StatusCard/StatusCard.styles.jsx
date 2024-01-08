import styled from "styled-components"

export const Wrapper = styled.div`
    --primaryColor: ${(props) =>
        props.$active
            ? props.$activePrimaryColor
            : props.$inactivePrimaryColor};
    --secondaryColor: ${(props) =>
        props.$active
            ? props.$activeSecondaryColor
            : props.$inactiveSecondaryColor};
    border: 1px solid var(--secondaryColor);
    border-radius: 5px;
    /* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
    min-height: 80px;
    width: 100%;
    padding: 0px;
    color: rgb(85, 85, 85);
    display: flex;
    flex-direction: row;
    background: var(--primaryColor);
    /* background: rgb(245, 245, 245); */
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

export const SymbolDiv = styled.div`
    height: 100%;
    width: 80px;
    border-right: 1px solid;
    border-color: var(--borderColor);
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--secondaryColor);
    svg {
        height: 30px;
        width: 30px;
    }
`

export const TextDiv = styled.div`
    padding: 15px;
    width: 100%;
    font-size: var(--fontSuperSmall);

    h3 {
        padding: 0;
        margin: 0;
        font-size: var(--fontSmall);
    }
`
