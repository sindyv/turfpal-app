import React from "react";

import { Wrapper } from "./Card.styles";

const Card = (props) => {
    return(
    <Wrapper>
        {props.children}
    </Wrapper>
    )
}

export default Card