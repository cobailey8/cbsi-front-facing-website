import React from 'react';

const contactCard = {
    display: 'flex',
    width: '100%',
    height: '100%',
}

const ImgCont = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'block',
    width: '15vw',
    height: '100%',
    maxWidth: '200px',
    borderRadius: '50%',
    border: '2px solid #eff',
    overflow: 'hidden',
}

const contDesc = {
    height: '100%',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
}

const nameDescBl = {
    fontWeight: '300',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    margin: '0 0 0 2vw',
    textShadow: '1px 1px rgb(166, 25, 46, .5)',
}

const contactDesc = {
    fontSize: '2.5vw',
    fontWeight: '300',
    letterSpacing: '1px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'start',
    margin: '1vw 0 0 2vw',
    textShadow: '1px 1px rgb(166, 25, 46)',
}

function ContactCard(props) {

    return ( 
        <>
            <div style={ contactCard }>
                <div style={ ImgCont }>
                    <img src={ props.image } alt='employee' width='100%' height='100%'></img>
                </div>
                <div style={ contDesc }>
                    <div style={ nameDescBl }>
                        <div style={{fontWeight: '400',fontSize: '2vw'}}> {props.name} </div>
                        <div style={{fontSize: '1.3vw'}}> {props.title} </div>
                    </div>
                    <div style={ contactDesc }>
                        {props.email}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactCard;
