import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { BiMenu, BiX } from "react-icons/bi";
import twitter from '../../images/twitter.png';
import discord from '../../images/discord.png';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../logo.png'

import {
    MenuIcon,
    TwitterIcon,
    DiscordIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    const showButton = () => {
        if (window.innerWidth <= 1000) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>
                            <img src={logo} alt='Logo' />
                        </NavLogo>
                        <MenuIcon onClick={handleClick}>
                            {click ? <BiX /> : <BiMenu />}
                        </MenuIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks  to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}> About </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Roadmap </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks  to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}> Meet The Team </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="faq" smooth={true} duration={500} spy={true} exact='true' offset={-60}> FAQ </NavLinks>
                            </NavItem>
                            <a href="https://twitter.com/thewolfdennft">
                                <TwitterIcon src={twitter} alt="f"/>
                            </a>  
                            <a href="https://discord.gg/cjHwvV2Wt4">
                                <DiscordIcon src={discord} alt="f"/>
                            </a>  
                        </NavMenu>
                        
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
