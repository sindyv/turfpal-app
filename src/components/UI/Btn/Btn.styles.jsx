import styled from "styled-components"

export const Wrapper = styled.div`
    background: ${(props) =>
        props.$selected
            ? props.$backgroundColorSelected
            : props.$backgroundColorDeselected};
    color: ${(props) =>
        props.$selected
            ? props.$textColorSelected
            : props.$textColorDeselected};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    opacity: ${(props) => (props.$disabled ? 0.6 : 1)};
`

export const TextArea = styled.div`
    font-family: ${(props) => props.$customFont};
    /* font-family: var(--turfpalFontBold); */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    font-size: var(--fontSuperSmall);

    svg {
        height: ${(props) => `${props.$svgSize}`}px;
        width: ${(props) => `${props.$svgSize}`}px;
    }
`
