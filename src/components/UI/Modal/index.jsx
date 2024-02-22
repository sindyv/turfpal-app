import React, { forwardRef, useEffect, useRef } from "react"
import { createPortal } from "react-dom"

import { Wrapper } from "./Modal.styles"

import Card from "../Card"

const Modal = forwardRef(function Modal({ children, onClick }, ref) {
    return createPortal(
        <Wrapper ref={ref}>
            <div>{children}</div>
        </Wrapper>,
        document.getElementById("modal")
    )
})

export default Modal
