import React from "react"

import { Background, Wrapper, Content } from "./Modal.styles"

import Card from "../Card"

function Modal({ children, onClick }) {
    return (
        <Wrapper>
            <Background onClick={onClick} />

            <Content>
                <Card>{children}</Card>
            </Content>
        </Wrapper>
    )
}

export default Modal
