import React, { useEffect, useState } from 'react';

function ImageCard(props) {
    var [slideUp, setSlideUp] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        var handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        var sliderCont = document.getElementById(props.keyx);

        sliderCont.addEventListener('mouseenter', () => setSlideUp(true))
        sliderCont.addEventListener('mouseleave', () => setSlideUp(false))

        return () => {
            sliderCont.removeEventListener('mouseenter', () => setSlideUp(true))
            sliderCont.removeEventListener('mouseleave', () => setSlideUp(false))
        }

    }, []);

    // STYLING
    var imageCard;
    var slider;
    var headingBl;
    var textBl;
    var buttonCont;
    var button;
    if(windowWidth <= 600){     // Mobile Styles
        imageCard = {
            background: `url('${props.image || './images/placeholder.jpg'}')`,
            backgroundPosition: 'center', 
            backgroundSize: 'cover',
            width: '180px',
            height: '240px',
            borderRadius: '3%',
            overflow: 'hidden',
            margin: '1vw 4px'
        }

        slider = {
            background: 'rgba(44,42,41, .9)',
            color: 'white',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '5% 5% 0 0',
            padding: '5px 3px 0 3px',
            position: 'relative',
            top: slideUp ? '35px' : '210px',
        }

        headingBl = {
            fontSize: '15px',
            lineHeight: '21px',
        }
        
        textBl = {
            fontSize: '.8em',
            fontWeight: '300',
            letterSpacing: '2px',
        }
        
        buttonCont = {
            padding: '0 0 5px 0',
        }
        
        button = {
            background: 'rgb(166, 25, 46)',
            color: 'white',
            fontSize: '.9em',
            fontWeight: '600',
            height: '25px',
            width: '95%',
            padding: '0 5px',
            border: 'none',
            borderRadius: '5px',
        }
    } else if(windowWidth > 600) {    // Tablet Styles
        imageCard = {
            background: `url('${props.image || './images/placeholder.jpg'}')`,
            width: '260px',
            height: '350px',
            borderRadius: '1%',
            overflow: 'hidden',
        }

        slider = {
            background: 'rgba(44,42,41, .9)',
            color: 'white',
            height: '265px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '5% 5% 0 0',
            padding: '5px 3px 0 3px',
            position: 'relative',
            top: slideUp ? '80px' : '318px',
        }

        headingBl = {
            fontSize: '19px',
        }
        
        textBl = {
            fontSize: '1em',
            fontWeight: '300',
            letterSpacing: '2px',
        }
        
        buttonCont = {
            padding: '0 0 5px 0',
        }
        
        button = {
            background: 'rgb(166, 25, 46)',
            color: 'white',
            fontSize: '.9em',
            fontWeight: '600',
            height: '25px',
            width: '95%',
            padding: '0 5px',
            border: 'none',
            borderRadius: '5px',
        }
    }

    return (
        <div style={ imageCard } id={props.keyx}>
            <div style={ slider }>

                <div style={ headingBl }>{props.heading}</div>

                <div style={ textBl }>{props.text}</div>
                
                <div  style={ buttonCont }>
                    <a href={props.link}>
                        <button style={ button }>{ props.buttonTxt || "Button" }</button>
                    </a>
                </div>
                
            </div>
        </div>
      );

}

export default ImageCard;