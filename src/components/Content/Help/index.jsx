import React from "react"

// Styles
import { Wrapper } from "./Help.styles"

function Help() {
    return (
        <Wrapper>
            <h3>Help is on its way!</h3>
            <p>
                But not today. It will be released with the next version of this
                web-app. In the mean time you are more then welcome to contact
                us here:
            </p>
            <p>
                Phone: +44 7562 994399
                <br />
                E-mail:{" "}
                <a href='mailto:service@ra-tls.com'>service@ra-tls.com</a>
            </p>
        </Wrapper>
    )
}

export default Help
