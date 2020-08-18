import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import ContactBlockSm from './ContactBlockSm';

const contactBlockCont = {
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30vw',
    maxHeight: '400px',
    padding: '6vw 0 6vw 0',
}

const leftBlock = {
    backgroundColor: 'rgba(21,28,41, .8)',
    width: '50%',
    height: '30vw',
    maxHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '0 10px 10px 0',
    margin: '0 1.5vw 0 0',
    padding: '0 2.5vw 0 0',
}

const leftBlockHeading = {
    flex: '1',
    fontSize: '3.5vw',
    fontWeight: '600',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    textShadow: '1px 1px rgb(166, 25, 46, .75)',
}

const leftBlockContent = {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'end',
    margin: '3vw 0 5vw 0',
}

const leftBlockContentItem = {
    display: 'flex', 
    justifyContent: 'space-between',
    width: '35vw',
    textShadow: '1px 1px rgb(166, 25, 46, .5)',
}

const leftBlockContentItemHeadding = {
    width: '50%',
    fontSize: '2vw',
    display: 'flex',
    justifyContent: 'flex-end',
}

const leftBlockContentItemContent = {
    flex: 2,
    display: 'flex',
    justifyContent: 'flex-end',
}

const rightBlock = {
    width: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
}

const topBlock = {
    backgroundColor: 'rgba(21,28,41, .8)',
    display: 'flex',
    alignItems: 'center',
    height: '43%',
    margin: '0 0 .5vw 1.5vw',
    borderRadius: '10px 0 0 10px',
    padding: '.75vw 0 .75vw .75vw',
}

const bottomBlock = {
    backgroundColor: 'rgba(21,28,41, .8)',
    display: 'flex',
    alignItems: 'center',
    height: '43%',
    margin: '.5vw 0 0 1.5vw',
    borderRadius: '10px 0 0 10px',
    padding: '.75vw 0 .75vw .75vw',
}

function ContactBlock() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [])

    
    return (

        windowWidth >= 600 ? 
            <div className="contactBlock" style={ contactBlockCont }>
                <div style={ leftBlock }>
                    <div style={ leftBlockHeading }>Contact Us</div>
                    <div style={ leftBlockContent }>

                        <div style={ leftBlockContentItem }>
                            <div style={ leftBlockContentItemHeadding }>
                                <b>Phone:</b>
                            </div>
                            <div style={ {...leftBlockContentItemContent, fontSize: '2vw'} }>
                                703-865-2514
                            </div>
                        </div>
                        
                        <div style={ leftBlockContentItem }>
                            <div style={ leftBlockContentItemHeadding }>
                                <b>Address:</b>
                            </div>
                            <div style={ {...leftBlockContentItemContent, fontSize: '1.35vw'} }>
                                774-A Walker Road <br/>
                                Great Falls, VA 22066
                            </div>
                        </div>
                    </div>
                </div>
                <div style={ rightBlock }>
                    <div style={ topBlock } className="bl">
                        <ContactCard image="./images/jack.jpg" name="Jack Mencia" title="President and CEO, CBSI" email="jack@cbsi.co"/>
                    </div>
                    <div style={ bottomBlock }>
                        <ContactCard image="./images/john.jpg" name="John Short" title="Operations Director, CBSI" email="john@cbsi.co"/>
                    </div>
                </div>
            </div>
        :
            <ContactBlockSm />
    );
}

export default ContactBlock;
