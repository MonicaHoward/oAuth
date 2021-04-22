import React from 'react';
import {Nav, Logo, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1 >oAuth</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/auth/google">Sign In With Google</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;