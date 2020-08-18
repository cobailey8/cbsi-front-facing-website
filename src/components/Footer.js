import React from 'react';
import BottomNav from './BottomNav';

function Footer() {

    const footer = {
        background: 'linear-gradient(180deg, rgba(0,0,0,1) 11%, rgba(33,33,33,1) 81%)',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: '1vw 3vw 0 3vw',
    }
    
    const copyright = {
        fontSize: '1.3vw',
        fontWeight: '100',
        letterSpacing: '2px',
        margin: '0 0 1vw 0',

    }

    const imgCont = {
        width: '15vw',
    }

    const logoImg = {
        width: 'inherit',
    }

    return (
        <div style={ footer }>
            <div style={ imgCont }>
                <img src="/images/cbsiLogo.png" alt="CBSI Logo" style={logoImg}/>
                <BottomNav />
            </div>

    <p style={ copyright }>Copyright © {new Date().getFullYear()} CBSI. All rights reserved.</p>
        </div>
    );
}

export default Footer;
