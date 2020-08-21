import React, {useState, useEffect} from 'react';



//  Mobile Styling
const basicInfoBlock = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8vw 0',
}

const headingCont = {
    color: 'rgb(166, 25, 46)',
    fontSize: '6vw',
    fontWeight: '300',
    padding: '1vw 2vw 3vw 2vw',
    wordSpacing: '2vw',
}

const subHeadingCont = {
    fontSize: '3.5vw',
    fontWeight: '500',
    padding: '1vw 1vw 3vw 1vw',
    width: '90vw',
}

const textCont = {
    fontSize: '3.5vw',
    fontWeight: '300',
    width: '90vw',
    lineHeight: '5vw',
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

    var basicInfoBlockR;
    var headingContR;
    var subHeadingContR;
    var textContR;
   if(windowWidth > 600 && windowWidth < 1280){ // Styling for tablets & small laptops
        basicInfoBlockR = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px 0',
        }
        
        headingContR = {
            color: 'rgb(166, 25, 46)',
            fontSize: '35px',
            fontWeight: '300',
            padding: '0 0 1vw 0',
            wordSpacing: '2vw',
        }
        
        subHeadingContR = {
            fontSize: '22px',
            fontWeight: '500',
            padding: '1vw 10px',
            maxWidth: '800px',
        }
        
       textContR = {
            fontSize: '19px',
            fontWeight: '300',
            maxWidth: '800px',
            lineHeight: '30px',
            padding: '1vw 0 0 0',
        }

    }else if(windowWidth >= 1280) {     // Styling for Desktop

        basicInfoBlockR = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '35px 0',
        }
        headingContR = {
            color: 'rgb(166, 25, 46)',
            fontSize: '50px',
            fontWeight: '300',
            padding: '0 0 1vw 0',
            wordSpacing: '2vw',
        }
        subHeadingContR = {
            fontSize: '25px',
            fontWeight: '500',
            padding: '2vw 10px',
            maxWidth: '1000px',
        }
        textContR ={
            fontSize: '20px',
            fontWeight: '300',
            lineHeight: '2vw',
            padding: '1vw 10px 0 10px',
            maxWidth: '1000px',
        }

    }

    return (
        <div style={ basicInfoBlockR || basicInfoBlock } className="basicInfoBlock">
            <div style={ headingContR || headingCont }> 
                { props.heading || 'Heading Prop Required' } 
            </div>
            <div style={ subHeadingContR || subHeadingCont }> 
                { props.subHeading } 
            </div>
            <div style={ textContR || textCont }>
                { props.text }
            </div>
        </div>
    );
}

export default BasicInfoBlock;
