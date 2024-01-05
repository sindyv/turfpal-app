import React from "react"

import { Wrapper } from "./Card.styles"

function Card(props) {
    return <Wrapper>{props.children}</Wrapper>
}

export default Card
