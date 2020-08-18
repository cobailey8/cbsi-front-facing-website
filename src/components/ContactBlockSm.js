import React from 'react';

const contactBlockSm = {
    background: 'rgba(63, 73, 83, 1)',
    margin: '6vw 3vw',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
}

const heading = {
    marginBottom: '2vw',
    fontWeight: 'bolder',
    textDecoration: 'underline',
}

const leftBlockContent = {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
}

const leftBlockContentItem = {
    display: 'flex', 
    justifyContent: 'space-between',
    width: '100%',
    margin: '3vw',
}

const leftBlockContentItemHeadding = {
    color: 'white',
    width: '40%',
    fontSize: '5vw',
    display: 'flex',
    justifyContent: 'center',
}

const leftBlockContentItemContent = {
    color: 'white',
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
}

function ContactBlockSm() {
    
    return(
        <>
            <div style={ contactBlockSm }>
                <div className="spotlightHeading" style={ heading }> Contact Us Today </div>
                <div style={ leftBlockContent }>

                    <div style={ leftBlockContentItem }>
                        <div style={ leftBlockContentItemHeadding }>
                            <b>Phone:</b>
                        </div>
                        <div style={ {...leftBlockContentItemContent, fontSize: '6vw'} }>
                            703-865-2514
                        </div>
                    </div>
                    
                    <div style={ leftBlockContentItem }>
                        <div style={ leftBlockContentItemHeadding }>
                            <b>Address:</b>
                        </div>
                        <div style={ {...leftBlockContentItemContent, fontSize: '4vw'} }>
                            774-A Walker Road <br/>
                            Great Falls, VA 22066
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ContactBlockSm;