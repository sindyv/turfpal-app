import styled from "styled-components"

export const Container = styled.div`
    padding: var(--mainContentPadding);
    min-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    p {
        font-size: var(--fontTiny);
        padding: 0;
        margin: 0;
    }

    input {
        padding: 6px;
    }

    select {
        width: 40%;
        padding: 6px;
    }

    .input-field {
        display: flex;
        justify-content: space-around;
        margin: 0;
        padding: 0;
        gap: 12px;
        overflow: hidden;
    }

    .input {
        display: flex;
        flex-direction: column;
        input {
            padding: 6px;
            margin: 6px 0;
            width: 100%;
        }
    }
`
