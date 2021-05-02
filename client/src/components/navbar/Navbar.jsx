import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import { connect } from 'react-redux';
import { GrUser } from "react-icons/gr";

const Navbar = (props) => {

    let component;
    const RenderAuthStatus = () => {
        
        switch (props.auth){
            case null:
                return;
            case false: 
                component = <NavBtnLink to="/auth/google">Login With Google</NavBtnLink>
                break;
            default: 
                component = <NavBtnLink to="/api/logout">Log Out</NavBtnLink>
        }
        return component
    }
console.log(props);
    return(
        <>
            <Nav>
                <NavLink exact to="/">
                    <h1>oAuth</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle={{fontWeight: "bold", color: "DeepPink"}}>
                        About
                    </NavLink>
                    <NavLink to="/contact" activeStyle={{fontWeight: "bold", color: "DeepPink"}}>
                        Contact
                    </NavLink>
                    
                </NavMenu>
                <NavMenu >
                <NavLink to="/profile">
                    <GrUser/>
                </NavLink>   
                </NavMenu>
                         
                <NavBtn>
                    {/* Leaving this in, but commented out because its cool and I want to remember how to do it.  */}
                    {/* <NavBtnLink to="/auth/google"><RenderAuthStatus value={props.auth}/></NavBtnLink> */}
                    {RenderAuthStatus(props.auth)}

                </NavBtn>
            </Nav>
        </>
    )
}

function mapStateToProps({ auth }){
    return { auth };
}

export default connect(mapStateToProps)(Navbar);