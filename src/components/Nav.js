import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HamburgerNav from './HamburgerNav';

var prevScrollPos = window.pageYOffset;

const navCont = {
    background: 'linear-gradient(180deg, rgba(0,0,0,0.5965346534653465) 37%, rgba(95,113,140,0) 99%)',
    position: 'fixed',
    top: 0,
    width: '100%',
    transition: 'top 0.3s',
    zIndex: '1000',
}

const subNav ={
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '15px',
    background: 'rgb(55,54,54)',
    color: 'white',
}

const subNavLink = {
    color: '#fff',
    fontSize: '80%',
    fontWeight: 400,
    width: '130px',
    margin: '0',
}

const nav = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '6vw',
    maxHeight: '50px',
    minHeight: '40px',  
    padding: '3px 0 0 0',
}

const navLogoCont = {
    maxHeight: 'inherit', 
    height: 'inherit', 
    display: 'flex', 
    alignItems: 'center'
}

const navLogo = {
    margin: '0 0 .3vw 4vw',
    height: '4.35vw',
    maxHeight: '40px',
    minHeight: '23px',
}

const navLinks = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    listStyle: 'none',
    padding: '0 5vw 0 0',
}

const links = { textDecoration: 'none' }

var navLinkText = {
    color: '#fff',
    fontSize: '13px',
    fontWeight: '400',
    letterSpacing: '1px',
    textDecoration: 'none',
    padding: '4px 1.3vw',
    margin: '0 1.5vw 0 0',
}

var highlightLink = {
    background: 'rgba(255,255,255,.15)',
    color: '#fff',
    fontSize: '13px',
    fontWeight: '400',
    letterSpacing: '1px',
    textDecoration: 'none',
    padding: '4px 1.3vw',
    margin: '0 1.5vw 0 0',
    borderRadius: '10px',
}

var homeTxt;
var aboutTxt;
var servicesTxt;
var projectsTxt;
var contactTxt;


// ------------
function Nav() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [currentPage, setCurrentPage] = useState(useLocation().pathname);


    useEffect(() => {

        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    useEffect(() => {
        //  Function to handle scroll events and dissapearing nav bar
        function handleScroll() {

            var currentScrollPos = window.pageYOffset;
            var targetEle = document.getElementById('navCont');

            if(targetEle !== null){
                targetEle.style.top = prevScrollPos > currentScrollPos
                    ? '0'
                    : '-100px';

                targetEle.style.background = currentScrollPos > 50 
                    ? 'linear-gradient(180deg, rgba(0,0,0,1) 11%, rgba(33,33,33,1) 81%)'
                    : 'linear-gradient(180deg, rgba(0,0,0,0.5965346534653465) 37%, rgba(95,113,140,0) 99%)';
            }

            prevScrollPos = currentScrollPos;
        }

        window.addEventListener('scroll', handleScroll);

    }, []);

    //  Highlight the nav link for the page the user is currently on.
    homeTxt = currentPage == '/' ? highlightLink : navLinkText;
    aboutTxt = currentPage == '/about' ? highlightLink : navLinkText;
    servicesTxt = currentPage == '/services' ? highlightLink : navLinkText;
    projectsTxt = currentPage == '/projects' ? highlightLink : navLinkText;
    contactTxt = currentPage == '/contact' ? highlightLink : navLinkText;

    return windowWidth >= 600 ? 
        <div style={navCont} id="navCont">

            <div style={ subNav } >
                <a href="http://www.cbsi.co/ams" style={ subNavLink }>Employee Portal</a>
                <Link style={ subNavLink } to="/contact" onClick={() => setCurrentPage("/contact")}>Contact Us</Link>
            </div>

            <nav style={ nav }>
            <Link style={ navLogoCont } to='/' onClick={() => setCurrentPage("/")}>
                <img src="/images/navLogo.png" alt="CBSI" style={ navLogo } />
            </Link>
                <ul style={ navLinks }>
                    <Link style={links} to='/' onClick={() => setCurrentPage("/")}>
                        <div style={ homeTxt } id="homeNavBtn" >HOME</div>
                    </Link>
                    <Link style={links} to='/about' onClick={() => setCurrentPage("/about")}>
                        <div style={ aboutTxt }>ABOUT</div>
                    </Link>
                    <Link style={links} to='/services' onClick={() => setCurrentPage("/services")}>
                        <div style={ servicesTxt }>SERVICES</div>
                    </Link>
                    <Link style={links} to='/projects' onClick={() => setCurrentPage("/projects")}>
                        <div style={ projectsTxt }>OUR PROJECTS</div>
                    </Link>
                    <Link style={links} to='/contact' onClick={() => setCurrentPage("/contact")}>
                        <div style={ contactTxt }>CONTACT</div>
                    </Link>
                </ul>
            </nav>

        </div>
    : <HamburgerNav />
}

export default Nav;
