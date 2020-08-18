import React from 'react';
import LinkingInfoCard from './LinkingInfoCard';

// Styles
const scrollableArea = {
    background: 'rgba(63, 73, 83, 1)',
}

const scrollableAreaCont = {
    display: 'block',
    overflowX: 'scroll',
    overflowY: 'none',
    minHeight: '250px',
    overflow: 'auto',
    padding: '15px 0 15px 0',
    margin: '5px 3vw 40px 3vw',
    borderRadius: '50px',
    borderRight: '2px solid lightgray',
    borderLeft: '2px solid lightgray',
}

const scrollableAreaContFlex = {
    display: 'flex',
    justifyContent: 'space-between',
    height: 'inherit',
}
// End Styles

export class ScrollableArea extends React.Component {

    render() {
        
        var dataArr = [];
        Object.keys(this.props.jsonData).forEach(key => dataArr.push(this.props.jsonData[key]));

        return (
            <>
            <div style={ scrollableArea }>
                <h1 className="spotlightHeading">{this.props.heading}</h1>
                <div style={ scrollableAreaCont }>
                    <div style={ scrollableAreaContFlex }>
                        {
                            //Output a Modal component for each object in dataArr
                            dataArr.map(item => {
                                
                                // Will only create and display a card if the data item.spotlight = true
                                return item.spotlight ? 
                                    <div style={{margin: '1vw'}} key={ item.id }>
                                        <LinkingInfoCard 
                                            key={ item.id }
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
}

export default ScrollableArea;
