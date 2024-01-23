import styled from "styled-components"

export const LogoImg = styled.img`
    height: auto;
    max-width: 60%;
`

export const Container = styled.div`
    width: 380px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;

    form {
        display: flex;
        width: 80%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 12px;

        div {
            width: 100%;
            display: flex;
            align-items: center;
        }
    }

    input {
        border: 0px;
        border-radius: 8px;
        background-color: var(--lightGrey);
        padding: 12px 12px 12px 36px;
        width: 100%;
    }

    .icon {
        position: absolute;
        margin-left: 10px;
        color: var(--turfpalColor);
        width: 20px;
        height: 20px;
    }
`
