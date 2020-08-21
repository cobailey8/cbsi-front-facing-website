import React, { useState, useEffect } from 'react';
import LinkingInfoCard from './LinkingInfoCard';

const responsiveGrid = {
    backgroundColor: 'rgba(63, 73, 83, 1)',
    margin: 0,
    padding: '0 8vw 5vw 8vw',
}

const heading = {
    color: '#fff',
    fontSize: '3vw',
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
    alignItems: 'center',
    padding: '2vw',
}

function ResponsiveGrid(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return() =>{
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    var headingSm;
    if(windowWidth < 600) {
        headingSm = {
            color: '#fff',
            fontSize: '4.5vw',
            fontWeight: '400',
            letterSpacing: '2px',
            margin: '3vw 0 1vw 0',
            WebkitTextStrokeWidth: '1px',
            WebkitTextStrokeColor: '#eff',
            textShadow: '1px 1px rgba( 0, 0, 0, .3 )',
        }
    }

    var dataArr = [];
    Object.keys(props.jsonData).forEach(key => dataArr.push(props.jsonData[key]));

    return (
        <div style={ responsiveGrid } >
            <div style={ headingSm || heading }>{props.heading}</div>
            <div style={ body }>
            {
                //Output a Modal component for each object in dataArr
                dataArr.map(item => 
                    <div style={ gridItem } key={ item.id }>
                        <LinkingInfoCard 
                            id = {item.id}
                            image={ item.image } 
                            heading={ item.heading } 
                            text={ item.text } 
                            buttonTxt={ item.buttonTxt } 
                            link={ item.link }
                        />
                    </div>
                )
            }
            </div>
        </div>
    );
}

export default ResponsiveGrid;
