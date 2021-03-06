import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

const responsiveGrid = {
    backgroundColor: 'rgba(63, 73, 83, 1)',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const cont = {
    width: '100%',
}

const heading = {
    color: '#fff',
    fontSize: '30px',
    fontWeight: '400',
    letterSpacing: '2px',
    margin: '3vw 0 1vw 0',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: '#eff',
    textShadow: '1px 1px rgba( 0, 0, 0, .3 )',
}

const body = {
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fit, minmax(300px, 1fr) )',
    width: '100%',
}

const gridItem = {

    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: '2vw 0',
}

function ResponsiveGrid(props) {
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

    var dataArr = [];
    Object.keys(props.jsonData).forEach(key => dataArr.push(props.jsonData[key]));

    var headingR;
    var contR;
    var bodyR;
    if(windowWidth < 600) {

        headingR = {
            color: '#fff',
            fontSize: '4.5vw',
            fontWeight: '400',
            letterSpacing: '2px',
            margin: '3vw 0 1vw 0',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: '#eff',
            textShadow: '1px 1px rgba( 0, 0, 0, .3 )',
        }

        bodyR = {
            display: 'grid',
            gridTemplateColumns: 'repeat( auto-fit, minmax(160px, 1fr) )',
            width: '100%',
        }

    }else if(windowWidth > 1280){
        headingR = {
            color: '#fff',
            fontSize: '35px',
            fontWeight: '400',
            letterSpacing: '2px',
            margin: '3vw 0 1vw 0',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: '#eff',
            textShadow: '1px 1px rgba( 0, 0, 0, .3 )',
        }
        contR = {
            width: '75%',
        }
    }

    var expandBtn;

    

    return (
        <div style={ responsiveGrid } >
            <div style={contR || cont}>
                <div style={ headingR || heading }>{props.heading}</div>
                <div style={ bodyR || body }>
                {
                    //Output a Modal component for each object in dataArr
                    dataArr.map(item => 
                        <div style={ gridItem } key={ item.id }>
                            <ImageCard 
                                keyx={ item.id }
                                image={ item.image } 
                                heading={ item.heading } 
                                text={ item.text } 
                                buttonTxt={ item.buttonTxt } 
                                link={ item.link }
                                style={ {background: 'yellow'} }
                            />
                        </div>
                    )
                }
                </div>

            </div>
            {expandBtn}
        </div>
    );
}

export default ResponsiveGrid;
