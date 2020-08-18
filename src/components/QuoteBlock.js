import React from 'react';

// Styles for quote with image
const imageQuoteBlock = {
    padding: '2vw 0 4vw 0',
}

const imageQuoteBlockOuter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

const imageQuoteBlockInner = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
}

const img = {
    height: '25vw',
    position: 'relative',
    left: '5vw',
    borderRadius: '3px',
    border: '1px solid black',
}

const textBlock = {
    background: 'white',
    color: 'black',
    maxHeight: '11vw',
    padding: '3vw 3vw',
    border: '3px solid rgb(166, 25, 46)',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    left: '-5vw',
    top: '2vw',
}

const text = {
    fontFamily: 'handWritten, Open Sans, sans-serif',
    fontSize: '3vw',
    fontWeight: '100',
    lineHeight: '3.5vw',
}

const authorBlock = {
    zIndex: 1,
    position: 'relative',
    top: '5vw',
    left: '14vw',
    display: 'inline-block',
}

const authorText = {
    fontSize: '2.3vw',
    fontWeight: 'bold',
}


// Styles for quote without image

const quoteBlock = {
    fontFamily: 'handWritten2, Open Sans, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '6vw 0 4vw 0'
}

const quoteCont = {
    zIndex: '-1',
    background: 'white',
    border: '1px solid rgb(166, 25, 46)',
    maxWidth: '75%',
    position: 'relative',
}

const leftQuoteImg = {
    height: '6vw',
    position: 'absolute',
    top: '-2.8vw',
    left: 0,
}

const quoteText = {
    fontFamily: 'handWritten2, Ariel, serif',
    fontSize: '3vw',
    fontWeight: '600',
    margin: '1.8vw 10vw',
    lineHeight: '3.5vw',
}

const rightQuoteImg = {
    height: '6vw',
    position: 'absolute',
    bottom: '-2.8vw',
    right: 0,
}
const quoteAuthorBlock ={
    display: 'flex',
    alignItems: 'center',
    margin: '1vw 0 0 0'
}

const authorTxt = {
    fontSize: '2vw',
    fontWeight: '600',
}

const authorDesc = {
    fontSize: '2vw',
    margin: '0 0 0 1vw',
}


function QuoteBlock(props) {

    if(props.image === undefined){
        // Simple Quote Block
        return(
            <div style={ quoteBlock } className="quoteBlock">
                <div style={ quoteCont }>
                    <img src="./images/leftQuote.png" alt="construction" style={ leftQuoteImg } />
                    <div style={ quoteText}>
                        { props.quote || 'quote Required' }
                    </div>
                    <div style={rightQuoteImg}></div>
                    <img src="./images/rightQuote.png" alt="construction" style={ rightQuoteImg } />
                </div>
                <div style={quoteAuthorBlock}>
                    <div style={ authorTxt } >- {props.author}</div>
                    <div style={ authorDesc } >({props.authorDesc})</div>
                </div>
            </div>
        );
    }else{
        // Image Quote Block
        return(
            <div style={ imageQuoteBlock } className="imageQuoteBlock">
                <div style={ authorBlock }>
                    <div style={ authorText }>
                        - { props.author }
                    </div>
                </div>
                <div style={ imageQuoteBlockOuter }>
                    <div style={ imageQuoteBlockInner }>
                        <img src={ props.image || './images/imgError.jpg' } alt={props.imgDesc} style={ img } />
                        <div style={ textBlock }>
                            <div style={ text }>
                                "{ props.text }"
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuoteBlock;
