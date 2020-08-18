import React, { useEffect } from 'react';
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

const navLinks = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    listStyle: 'none',
    padding: '0 6vw 0 0',
}

const links = { textDecoration: 'none' }

// ------------
function Nav() {

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
        return() =>{
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <div style={navCont} id="navCont">

            <div className="subNav">
                <a href="http://www.cbsi.co/ams" style={ subNavLink }>Employee Portal</a>
                <Link style={ subNavLink } to="/contact">Contact Us</Link>
            </div>

            <nav style={ nav }>
            <Link style={ navLogoCont } to='/'>
                <img src="/images/navLogo.png" alt="CBSI" className="navLogo"/>
            </Link>
                <ul style={ navLinks }>
                    <Link style={links} to='/'>
                        <div className="navLinkText">HOME</div>
                    </Link>
                    <Link style={links} to='/about'>
                        <div className="navLinkText">ABOUT</div>
                    </Link>
                    <Link style={links} to='/services'>
                        <div className="navLinkText">SERVICES</div>
                    </Link>
                    <Link style={links} to='/projects'>
                        <div className="navLinkText">OUR PROJECTS</div>
                    </Link>
                    <Link style={links} to='/contact'>
                        <div className="navLinkText">CONTACT</div>
                    </Link>
                </ul>
            </nav>

        </div>
    );
}

export default Nav;
