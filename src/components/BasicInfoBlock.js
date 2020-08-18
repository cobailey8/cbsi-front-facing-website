import React, {useState, useEffect} from 'react';

const basicInfoBlock = {
    // background: 'cyan',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8vw 0',
}

const headingCont = {
    // background: 'yellow',
    color: 'rgb(166, 25, 46)',
    fontSize: '3.5vw',
    fontWeight: '300',
    padding: '1vw 2vw 3vw 2vw',
    wordSpacing: '2vw',
}

const subHeadingCont = {
    // background: 'green',
    fontSize: '2.5vw',
    fontWeight: '500',
    padding: '1vw 1vw 3vw 1vw',
    width: '90vw',
}

const textCont = {
    // background: 'red',
    fontSize: '2vw',
    fontWeight: '300',
    width: '90vw',
    lineHeight: '3vw',
    padding: '1vw',
}

function BasicInfoBlock(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [])

    var headingContSm;
    var subHeadingContSm;
    var textContSm;
    if(windowWidth < 600){
        headingContSm = {
            color: 'rgb(166, 25, 46)',
            fontSize: '5vw',
            fontWeight: '300',
            padding: '1vw 2vw 3vw 2vw',
            wordSpacing: '2vw',
        }
        subHeadingContSm = {
            fontSize: '3.5vw',
            fontWeight: '500',
            padding: '1vw 1vw 3vw 1vw',
            width: '90vw',
        }
        textContSm ={
            fontSize: '2.8vw',
            fontWeight: '300',
            width: '90vw',
            lineHeight: '4vw',
            padding: '1vw',
        }
    }

    return (
        <div style={ basicInfoBlock } className="basicInfoBlock">
            <div style={ headingContSm || headingCont }> 
                { props.heading || 'Heading Prop Required' } 
            </div>
            <div style={ subHeadingContSm || subHeadingCont }> 
                { props.subHeading } 
            </div>
            <div style={ textContSm || textCont }>
                { props.text }
            </div>
        </div>
    );
}

export default BasicInfoBlock;
