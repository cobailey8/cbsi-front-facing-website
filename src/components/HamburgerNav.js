import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navCont = {
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 11%, rgba(33,33,33,1) 81%)',
    width: '100%',
    zIndex: '1000',
}

const nav = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '40px', 
}

const navLogoCont = {
    height: 'inherit', 
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
}

const navLogo = {
    height: '30px',
}

const hbIconCont = {
    height: 'inherit',
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
}

const hbIcon = {
    height: 'inherit',
    padding: '0 25px 0 40px',
}

const dropMenu = {
    background: 'linear-gradient( -180deg, rgba(0,0,0,1) 10%, rgba(33,33,33,1) 90%)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '80%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRight: '5px solid white',
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
    // background: 'red',
    width: '100%',
    height: '60%',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: '0 50% 50% 0',
}
const links = {
    textDecoration: 'none',
    width: 'inherit',
}
const navLinkText = {
    width: '95%',
    color: 'white',
    fontSize: '6vw',
    padding: '2.5vh 10px 2.5vh 0',
    display: 'flex',
    justifyContent: 'flex-end',
}

// ------------
function HamburgerNav() {
    const [showMenu, setShowMenu] = useState(false);

    let menu;
    let menuMask;
    if(showMenu) {
        menu = 
            <div style={ dropMenu }>
                 <ul style={ navLinks }>
                    <Link style={links} to='/'  onClick={() => setShowMenu(false)}>
                        <div style={ navLinkText } id="homeNavBtn" >HOME</div>
                    </Link>
                    <Link style={links} to='/about' onClick={() => setShowMenu(false)}>
                        <div style={ navLinkText }>ABOUT</div>
                    </Link>
                    <Link style={links} to='/services' onClick={() => setShowMenu(false)}>
                        <div style={ navLinkText }>SERVICES</div>
                    </Link>
                    <Link style={links} to='/projects' onClick={() => setShowMenu(false)}>
                        <div style={ navLinkText }>OUR PROJECTS</div>
                    </Link>
                    <Link style={links} to='/contact' onClick={() => setShowMenu(false)}>
                        <div style={ navLinkText }>CONTACT</div>
                    </Link>
                </ul>
            </div>

        menuMask = 
            <div style={ mask } onClick={() => setShowMenu(false)}> 
            a
            </div>
    }

    return (
        <header style={ navCont }>
            { menuMask }
            <nav style={ nav }>
                <Link style={ navLogoCont } to='/'>
                    <img src="/images/navLogo.png" alt="CBSI" style={ navLogo } />
                </Link>
                <div style={ hbIconCont } onClick={() => setShowMenu(!showMenu)}>
                    <img src="/images/hbIcon.png" alt="Navigation Options" style={ hbIcon } />
                </div>
                
            </nav>

            { menu }

        </header>
    );
}

export default HamburgerNav;
