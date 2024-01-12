import styled from "styled-components"

export const Wrapper = styled.div`
    padding: var(--mainContentPadding);
`
export const Header = styled.div`
    font-family: var(--turfpalFontBold);
    margin: 0 0 24px 0;
`
export const CardDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 12px 0;
    svg {
        color: var(--turfpalColor);
        width: 18px;
    }

    span {
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: var(--turfpalFontBold);
        font-size: var(--fontSuperSmall);
    }
`

export const MainValue = styled.div`
    width: 100%;
    text-align: center;
    margin: 0 0 10px 0;
    span {
        font-size: var(--fontSuperBig);
        font-family: var(--turfpalFontBold);

        &:last-child {
            font-size: var(--fontBig);
        }
    }
`

export const CardContent = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
    /* grid-template-columns: 1fr 1fr 1fr; */
    justify-content: space-between;
    font-size: var(--fontSuperSmall);
    width: 100%;
`
