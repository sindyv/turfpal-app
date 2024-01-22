import styled from "styled-components"

export const Container = styled.div`
    border: 1px solid var(--turfpalColor);
    border-radius: 8px;
    background-color: var(--turfpalColor);
    padding: 12px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 12px;
    svg {
        width: 18px;
        height: 18px;
    }

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

export const SmallHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`

export const BoldHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: var(--fontSuperSmall);
    font-family: var(--turfpalFontBold);

    svg {
        width: 18px;
        height: 18px;
    }
`

export const Content = styled.div`
    display: flex;

    flex-direction: column;
    gap: 12px;
    font-size: var(--fontSuperSmall);

    svg {
        width: 18px;
        height: 18px;
    }
`

export const ButtonArea = styled.div`
    padding: 6px;
    background: var(--lightGrey);
    display: flex;
    flex-direction: row;
    border: 1px solid var(--lightGrey);
    border-radius: 8px;
    font-family: var(--turfpalFontBold);
`
