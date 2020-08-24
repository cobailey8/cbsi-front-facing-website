import React, {useState, useEffect} from 'react';
import ImageCard from './ImageCard';

// Styles
var scrollableArea = {
    background: 'rgba(63, 73, 83, 1)',
}

const scrollableAreaCont = {
    display: 'block',
    overflowX: 'scroll',
    overflowY: 'none',
    minHeight: '280px',
    overflow: 'auto',
    margin: '0 1vw 30px 1vw',
    borderRadius: '50px',
    borderRight: '2px solid lightgray',
    borderLeft: '2px solid lightgray',
}

const scrollableAreaContFlex = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    minHeight: 'inherit',
}
// End Styles

function ScrollableArea(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        var handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    
    if(windowWidth > 600 && windowWidth < 1280){
        scrollableArea = {
            background: 'rgba(63, 73, 83, 1)',
            padding: '20px',
        }
    }else if(windowWidth >= 1280) {
        scrollableArea = {
            background: 'rgba(63, 73, 83, 1)',
            padding: '50px',
        }
    }
        
    // Grab data from json file and convert it to an array
    var dataArr = [];
    Object.keys(props.jsonData).forEach(key => dataArr.push(props.jsonData[key]));

    return (
        <>
        <div style={ scrollableArea }>
            <h1 className="spotlightHeading">{props.heading}</h1>
            <div style={ scrollableAreaCont }>
                <div style={ scrollableAreaContFlex }>
                    {
                        //Output a Modal component for each object in dataArr
                        dataArr.map(item => {
                            
                            // Will only create and display a card if the data item.spotlight = true
                            return item.spotlight ? 
                                <div style={{margin: '1vw'}} key={ item.id }>

                                    <ImageCard 
                                        keyx={ item.id }
                                        image={ item.image } 
                                        heading={ item.heading } 
                                        text={ item.text } 
                                        buttonTxt={ item.buttonTxt } 
                                        link={ item.link }
                                    />

                                </div> : null;
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default ScrollableArea;
