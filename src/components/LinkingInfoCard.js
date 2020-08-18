import React from 'react';

const linkingInfoCardContainer = {
    background: 'rgba(44,42,41)',
    height: '350px',
    width: '275px',
    color: '#fff',
    border: '1px solid black',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    // zIndex: '',
}

const imageContainer = {
    height: '40%',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit',
}

const img = {
    width: '230%',
    height: '250%',
    minHeight: '140px',
}

const heading = {
    fontSize: '120%',
    fontWeight: '400',
    margin: 0,
    padding: '5px',
    color: '#fff',
}

const headingText = {
    whiteSpace: 'nowrap',
    overflow: 'none',
}

const text = {
    flex: '2',
    fontSize: '95%',
    fontWeight: '300',
    lineHeight: '1.5em',
    color: '#fff',
    margin: '',
}

const buttonCont = {
    padding: '0 0 10px 0',
}

const button = {
    background: 'rgb(166, 25, 46)',
    color: 'white',
    fontSize: '1em',
    fontWeight: '600',
    height: '50%',
    minHeight: '25px',
    padding: '0 20%',
    border: 'none',
    borderRadius: '5px',
}

function LinkingInfoCard(props) {

  return (
    <>    
        <div style={ linkingInfoCardContainer } className="linkingInfoCard" id={props.id}>
            <a href={props.link} style={ imageContainer }>
                <img src={ props.image || './images/placeholder.jpg' } alt={props.heading} style={ img } />    
            </a>  
            <div className="slidingContent">
                <h1  style={ heading } >
                    <div style={ headingText } id={'h'+props.id}> 
                        {props.heading} 
                    </div>
                    <hr style={{color: 'white'}}/>
                </h1>
                <div  style={ text }>
                    {props.text}
                </div>
                <div  style={ buttonCont }>
                    <a href={props.link}>
                        <button style={ button }>{ props.buttonTxt || "Button" }</button>
                    </a>
                </div>
            </div>
        </div>
    </>
  );
}

export default LinkingInfoCard;