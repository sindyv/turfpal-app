import React from "react";

// Images
import TurfLogo from '../../images/logo_primary.png'
import MenuIcon from '@mui/icons-material/Menu';
// Styles
import { Wrapper, Content, LogoImg, Hamburger } from "./Header.styles";

const Header = () => {
    return (
        <Wrapper>
            <Content>
                {/* <Hamburger>
                    <MenuIcon />
                </Hamburger> */}
                <LogoImg src={TurfLogo} alt='turfpal-logo' />
            </Content>
        </Wrapper>
    )
}

export default Header