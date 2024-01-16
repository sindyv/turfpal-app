import styled from "styled-components"

export const Background = styled.div`
    background: rgba(0, 0, 0, 0.33);
    height: 100%;
    width: 100%;
    position: absolute;
`

export const Content = styled.div`
    z-index: 101;
`

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
`
