import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const nav = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'space-around',
    margin: '2vw 2vw 3vw 2vw',
}

const link = {  // Not really useful, but use as placeholder
    margin: 0,
    padding: 0,
}

const linkText = {
    width: '14vw',
    textDecoration: 'underline',
    fontSize: '1.2vw',
    fontWeight: '600',
    color: 'white',
    letterSpacing: '.35vw',
}

function BottomNav() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, []);

    // Responsive Style Changes
    var linkTextSm;
    if(windowWidth < 600) {
        linkTextSm = {
            display: 'none',
        }
    }

    return (
        <nav style={ nav }>
                <Link style= {link} to='/'>
                    <div style={ linkTextSm || linkText }>HOME</div>
                </Link>
                <Link style= {link} to='/about'>
                    <div style={ linkTextSm || linkText }>ABOUT</div>
                </Link>
                <Link style= {link} to='/services'>
                    <div style={ linkTextSm || linkText }>SERVICES</div>
                </Link>
                <Link style= {link} to='/projects'>
                    <div style={ linkTextSm || linkText }>PROJECTS</div>
                </Link>
                <Link style= {link} to='/contact'>
                    <div style={ linkTextSm || linkText }>CONTACT</div>
                </Link>
        </nav>
    );
}

export default BottomNav;
