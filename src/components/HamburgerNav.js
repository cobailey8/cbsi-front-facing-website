import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navCont = {
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 11%, rgba(33,33,33,1) 81%)',
    width: '100%',
    zIndex: '1000',
}

const nav = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50px', 
}

const navLogoCont = {
    height: 'inherit', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
}

const navLogo = {
    height: '35px',
}

const hbIconCont = {
    height: 'inherit',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
}

const hbIcon = {
    height: '38px',
    padding: '0 25px 0 40px',
}

const dropMenu = {
    background: 'linear-gradient( -180deg, rgba(0,0,0,1) 10%, rgba(33,33,33,1) 90%)',
    background: 'linear-gradient(270deg, rgba(28,28,28,1) 62%, rgba(64,107,171,1) 100%)',
    background: 'linear-gradient(270deg, rgba(28,28,28,1) 20%, rgba(35,109,221,1) 300%)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '3px solid white',
    zIndex: '1000',
}

const mask = {
    background: 'rgba(0,0,0,.5)',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: '1000',
}

const navLinks = {
    width: '100%',
    height: '60%',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
}
const links = {
    textDecoration: 'none',
    width: 'inherit',
}
const navLinkText = {
    width: '95%',
    color: 'white',
    fontSize: '5vw',
    padding: '2.5vh 10px 2.5vh 0',
    display: 'flex',
    justifyContent: 'flex-end',
}
const highlightLink = {
    background: 'rgba(255,255,255,.15)',
    width: '95%',
    color: 'white',
    fontSize: '5vw',
    padding: '2.5vh 10px 2.5vh 0',
    display: 'flex',
    justifyContent: 'flex-end',
    borderRadius: '0 20px 20px 0',
}

// ------------
function HamburgerNav() {
    const [showMenu, setShowMenu] = useState(false);
    const [currentPage, setCurrentPage] = useState(useLocation().pathname);

    let menu;
    let menuMask;

    //  Highlight the nav link for the page the user is currently on.
    var homeTxt = currentPage == '/' ? highlightLink : navLinkText;
    var aboutTxt = currentPage == '/about' ? highlightLink : navLinkText;
    var servicesTxt = currentPage == '/services' ? highlightLink : navLinkText;
    var projectsTxt = currentPage == '/projects' ? highlightLink : navLinkText;
    var contactTxt = currentPage == '/contact' ? highlightLink : navLinkText;

    function handleNavigation(toPage) {
        setShowMenu(false);
        setCurrentPage(toPage);
    }

    if(showMenu) {
        menu = 
            <div style={ dropMenu }>

                <ul style={ navLinks }>
                    <Link style={links} to='/' onClick={ () => handleNavigation("/") }>
                        <div style={ homeTxt }> HOME </div>
                    </Link>
                    <Link style={links} to='/about' onClick={ () => handleNavigation("/about") }>
                        <div style={ aboutTxt }> ABOUT </div>
                    </Link>
                    <Link style={links} to='/services' onClick={ () => handleNavigation("/services") }>
                        <div style={ servicesTxt }> SERVICES </div>
                    </Link>
                    <Link style={links} to='/projects' onClick={ () => handleNavigation("/projects") }>
                        <div style={ projectsTxt }> OUR PROJECTS </div>
                    </Link>
                    <Link style={links} to='/contact' onClick={ () => handleNavigation("/contact") }>
                        <div style={ contactTxt }> CONTACT </div>
                    </Link>
                </ul>
            </div>

        menuMask = <div style={ mask } onClick={() => setShowMenu(false)}></div>
    }

    return (
        <header style={ navCont }>
            { menuMask }
            <nav style={ nav }>

                <Link style={ navLogoCont } to='/' onClick={ () => handleNavigation("/") }>
                    <img src="/images/navLogo.png" alt="CBSI" style={ navLogo } />
                </Link>

                <div style={ hbIconCont } onClick={() => setShowMenu(true)}>
                    <img src="/images/hbIcon.png" alt="Navigation Options" style={ hbIcon } />
                </div>
                
            </nav>
            
            { menu }

        </header>
    );
}

export default HamburgerNav;
