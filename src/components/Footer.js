import React, { useState, useEffect } from 'react';
import BottomNav from './BottomNav';

const footer = {
    background: 'linear-gradient(180deg, rgba(0,0,0,1) 11%, rgba(33,33,33,1) 81%)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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

function Footer() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [])

    //  Responsive style changes
    var copyrightSm;
    var imgContSm;
    if(windowWidth < 600) {

        // Mobile styles(< 600)
        copyrightSm = {
            fontSize: '2.3vw',
            fontWeight: '300',
            letterSpacing: '1px',
            margin: '0 0 2vw 0',
        }

        imgContSm = {
            width: '20vw',
        }
    }

    return (
        <div style={ footer }>
            <div style={ imgContSm || imgCont }>
                <img src="/images/cbsiLogo.png" alt="CBSI Logo" style={ logoImg }/>
                <BottomNav />
            </div>

    <p style={ copyrightSm || copyright }>Copyright © {new Date().getFullYear()} CBSI. All rights reserved.</p>
        </div>
    );
}

export default Footer;