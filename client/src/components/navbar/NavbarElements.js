import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaBars } from 'react-icons/fa';
import {GrDeploy} from "react-icons/gr";


export const Nav = styled.nav`
    background: #FFF;
    border-bottom: #EEE solid 1px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000vw) / 2);
    z-index: 50;
    justify-content: flex-start;
`
export const Logo = styled(GrDeploy)`
    color: #000;
    width: 50px;
`

export const NavLink = styled(Link)`
    color: #000
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    &.active {
        color: #ED254E
    }
   
`

export const Bars = styled(FaBars)`
    display: none;
    color: #000;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.2rem;
        cursor: pointer;
    }
`
export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    white-space: nowrap;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    justify-content: flex-end;
    width: 40vw;
    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background #000;
    padding: 10px 22px;
    color: #FFF;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
        border: #000 solid 3px
        
    }
   
`
