import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    margin: '0 0 .3vw 6vw',
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
    padding: '0 6vw 0 0',
}

const navLinkText = {
    color: '#fff',
    fontSize: '1.5vw',
    fontWeight: '500',
    letterSpacing: '1px',
    textDecoration: 'none',
    padding: '5px 1vw',
    margin: '0 1.5vw 0 0',
}

const links = { textDecoration: 'none' }

// ------------
function Nav() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    //  Function to handle scroll events and dissapearing nav bar
    function handleScroll() {
        var currentScrollPos = window.pageYOffset;
        var targetEle = document.getElementById('navCont');

        targetEle.style.top = prevScrollPos > currentScrollPos
            ? '0'
            : '-10vw';

        targetEle.style.background = currentScrollPos > 50 
            ? 'linear-gradient(180deg, rgba(0,0,0,1) 11%, rgba(33,33,33,1) 81%)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.5965346534653465) 37%, rgba(95,113,140,0) 99%)';
        
        prevScrollPos = currentScrollPos;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return() =>{
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);
        }
    }, []);

    var subNavSm;
    var navLogoSm;
    var navLinkTextSm;
    var displNone;
    if(windowWidth < 600) {
        subNavSm = {
            display: 'none',
        }
        
        navLogoSm = {
            margin: '0 0 .3vw 1vw',
            height: '4.35vw',
            maxHeight: '40px',
            minHeight: '23px',
        }
        
        navLinkTextSm = {
            color: '#fff',
            fontSize: '1.8vw',
            fontWeight: '600',
            letterSpacing: '1px',
            textDecoration: 'none',
            padding: '5px 1vw',
            margin: '0 1.2vw 0 0',
        }
        displNone = {
            display: 'none',
        }
    }


    return (
        <div style={navCont} id="navCont">

            <div style={ subNavSm || subNav } >
                <a href="http://www.cbsi.co/ams" style={ subNavLink }>Employee Portal</a>
                <Link style={ subNavLink } to="/contact">Contact Us</Link>
            </div>

            <nav style={ nav }>
            <Link style={ navLogoCont } to='/'>
                <img src="/images/navLogo.png" alt="CBSI" style={ navLogoSm || navLogo } />
            </Link>
                <ul style={ navLinks }>
                    <Link style={links} to='/'>
                        <div style={ displNone || navLinkText } id="homeNavBtn" >HOME</div>
                    </Link>
                    <Link style={links} to='/about'>
                        <div style={ navLinkTextSm || navLinkText }>ABOUT</div>
                    </Link>
                    <Link style={links} to='/services'>
                        <div style={ navLinkTextSm || navLinkText }>SERVICES</div>
                    </Link>
                    <Link style={links} to='/projects'>
                        <div style={ navLinkTextSm || navLinkText }>OUR PROJECTS</div>
                    </Link>
                    <Link style={links} to='/contact'>
                        <div style={ navLinkTextSm || navLinkText }>CONTACT</div>
                    </Link>
                </ul>
            </nav>

        </div>
    );
}

export default Nav;
