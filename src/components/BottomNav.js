import React from 'react';
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
    return (
        <nav style={ nav }>
                <Link style= {link} to='/'>
                    <div style={ linkText }>HOME</div>
                </Link>
                <Link style= {link} to='/about'>
                    <div style={ linkText }>ABOUT</div>
                </Link>
                <Link style= {link} to='/services'>
                    <div style={ linkText }>SERVICES</div>
                </Link>
                <Link style= {link} to='/projects'>
                    <div style={ linkText }>PROJECTS</div>
                </Link>
                <Link style= {link} to='/contact'>
                    <div style={ linkText }>CONTACT</div>
                </Link>
        </nav>
    );
}

export default BottomNav;
