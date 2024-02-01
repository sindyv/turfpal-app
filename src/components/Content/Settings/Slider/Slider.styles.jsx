import styled from "styled-components"

export const CenteredDiv = styled.div`
    display: flex;
    gap: 0px;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

export const SliderHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h4 {
        padding: 10px 0;
        margin: 0;
    }
`

export const SliderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        width: 100%;
    }
`

export const RangeView = styled.span`
    padding-left: 24px;
    padding-bottom: 24px;
    font-size: var(--fontSmall);

    span {
        font-size: var(--fontSuperSmall);
    }
`
