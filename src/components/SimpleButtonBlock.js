import React from 'react';

const simpleButtonBlock = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3vw 0',
}
const button = {
    background: 'rgb(166, 25, 46)',
    color: 'white',
    textDecoration: 'none',
    padding: '1vw 5vw',
    borderRadius: '5px',
}

function SimpleButtonBlock(props) {
    return (
        <div style = { simpleButtonBlock } className="simpleButtonBlock">
            <a href={ props.href } style={ button }>
                { props.buttonText }
            </a>
        </div>
    );
}

export default SimpleButtonBlock;
