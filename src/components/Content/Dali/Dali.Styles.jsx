import styled from "styled-components"

export const Container = styled.div`
    padding: var(--mainContentPadding);
    min-width: 380px;
    max-width: var(--maxWidth);
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const ButtonArea = styled.div`
    width: 100%;
    padding: 6px;
    background: var(--lightGrey);
    display: flex;
    gap: 36px;
    flex-direction: row;
    border: 1px solid var(--lightGrey);
    border-radius: 8px;
    font-family: var(--turfpalFontBold);
`
