import React, { useState, useEffect } from 'react';

var imageInfoBlock = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '6vw 3vw 3vw 3vw',
}

var imgCont = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

var img = {
    height: '27vw',
    width: '40vw',
    borderRadius: '3px',
}

var textBl = {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    padding: '0 3vw 3vw 3vw 3vw',
}

var headerContBlock = {
    fontSize: '3vw',
    fontWeight: '400',
    margin: '0 0 2.5vw 0',
    padding: '0 0 0 1.2vw',

}

var textContBlock = {
    width: '90%',
    height: '85%',
    fontSize: '1.8vw',
    fontWeight: '300',
    display: 'flex',
    margin: '0 0 0 2.3vw',
}

function ImageInfoBlock(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [])

    // Dark theme or light theme based on props. default is light.
    var color = props.isDark 
        ? { background: 'rgba(63, 73, 83, 1)', color: 'white' } 
        : { background: '', color: 'rgba(44,42,41)' };


    // Display right to left, or left to right based on the 'flip' prop. Also takes care of mobile styling
    var flip;
    var imgSm;
    var headerContBlockSm;
    var textContBlockSm;
    if(windowWidth < 600){  // 'flip' prop doesn't matter here becauuse flexDirection has to be set to 'column'

        flip = { flexDirection: 'column'};

        imgSm = {
            width: '100%',
            borderRadius: '7px',
        }

        headerContBlockSm = {
            display: 'flex',
            justifyContent: 'center',
            fontSize: '4.5vw',
            fontWeight: '400',
            letterSpacing: '2px',
            margin: '20px 0 0 0',
        
        }

        textContBlockSm = {
            fontSize: '2.8vw',
            fontWeight: '300',
            margin: '0 3vw',
            letterSpacing: '.3vw',
        }

    } else if(props.flip){  // 'flip' prop is true, and the row should be viewed in reverse.
        flip = { flexDirection: 'row-reverse'};
    } else {    // 'flip' prop is false, and the row should be viewed as is written naturally in JSX below
        flip = { flexDirection: 'row' };
    }
    
    return (
        <div style={ {...imageInfoBlock, ...color, ...flip} } className="imageInfoBlock" id={"find"+props.id}>
            <div style={ imgCont }><img src={ props.image || './images/placeholder.jpg' } alt={props.headding} style={ imgSm || img } /></div>
            <div style={ textBl }>
                <div style={headerContBlockSm || headerContBlock}>
                    {props.headerContent}
                </div>
                <div style={textContBlockSm || textContBlock}>
                    {props.textContent}
                </div>
            </div>
        </div>
    );
}

export default ImageInfoBlock;
