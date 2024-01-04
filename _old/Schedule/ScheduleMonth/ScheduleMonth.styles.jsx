import styled from "styled-components"

export const MonthDiv = styled.div`
    border-radius: 5px;
    width: 100%;
    max-width: 700px;
    height: 30px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    font-size: var(--fontBig);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);
    margin: 0 0 5px 0;
    svg {
        width: 40px;
        height: 40px;
    }

    h3 {
        margin: 0;
        padding: 0;
    }
`
