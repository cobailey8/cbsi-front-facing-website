import React, { useState, useEffect } from 'react';

var imageInfoBlock = {
    background: 'red',
    padding: '2vw',
    display: 'flex',
    justifyContent: 'center',
}

var cont = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '1000px',
    width: '100%',
}

var imgCont = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

var img = {
    height: '27vw',
    maxHeight: '350px',
    width: '40vw',
    maxWidth: '400px',
    borderRadius: '3px',
}

var textBl = {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '700px',
    textAlign: 'left',
    padding: '0 3vw 3vw 3vw 3vw',
}

var headerContBlock = {
    fontSize: '24px',
    fontWeight: '400',
    minWidth: '300px',
    width: '95%',
    margin: '0 0 1vw 0',
    padding: '0 0 0 2vw',
}

var textContBlock = {
    width: '95%',
    height: '85%',
    fontSize: '17px',
    fontWeight: '300',
    display: 'flex',
    margin: '0 0 0 2vw',
}

function ImageInfoBlock(props) {
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

    // Dark theme or light theme based on props. default is light.
    var color = props.isDark 
        ? { background: 'rgba(63, 73, 83, 1)', color: 'white' } 
        : { background: '', color: 'rgba(44,42,41)' };
    
    imageInfoBlock = {
        ...imageInfoBlock,
        ...color
    }


    // Display right to left, or left to right based on the 'flip' prop. Also takes care of mobile styling
    var imgR;
    var headerContBlockR;
    var textContBlockR;
    if(windowWidth < 600){  // 'flip' prop doesn't matter here becauuse flexDirection has to be set to 'column'

        cont = { ...cont, flexDirection: 'column' };

        imgR = {
            width: '100%',
            borderRadius: '7px',
        }

        headerContBlockR = {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '4.5vw',
            fontWeight: '400',
            letterSpacing: '2px',
            margin: '3vw 0 2vw 0',
        
        }

        textContBlockR = {
            fontSize: '2.8vw',
            fontWeight: '400',
            margin: '0 3vw',
            letterSpacing: '.3vw',
        }

    } else if(props.flip){  // 'flip' prop is true, and the row should be viewed in reverse.
        cont = { ...cont, flexDirection: 'row-reverse' };
    } else {    // 'flip' prop is false, and the row should be viewed as is written naturally in JSX below
        cont = { ...cont, flexDirection: 'row' };
    }

    if(windowWidth >= 1280) {
        headerContBlockR = {
            width: '90%',
            minWidth: '600px',
            fontSize: '30px',
            fontWeight: '400',
            margin: '0 0 1vw 0',
            padding: '0 0 0 10px',
        
        }

        textContBlockR = {
            width: '95%',
            height: '85%',
            fontSize: '20px',
            fontWeight: '300',
            display: 'flex',
            margin: '0 0 0 1vw',
        }
    }

    return (
        <div style={ imageInfoBlock }>
            <div style={ cont } className="imageInfoBlock" id={"find"+props.id}>
                <div style={ imgCont }><img src={ props.image || './images/placeholder.jpg' } alt={props.headding} style={ imgR || img } /></div>
                <div style={ textBl }>
                    <div style={headerContBlockR || headerContBlock}>
                        {props.headerContent}
                    </div>
                    <div style={textContBlockR || textContBlock}>
                        {props.textContent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageInfoBlock;
