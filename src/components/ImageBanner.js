import React, {useState, useEffect} from 'react';

// Styles

var homeBannerImg = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '60vw',
}

const textCont1 = {
    background: 'rgba(26,56,111,.5)',
    padding: '10vw 1vw 0 5vw',
    flex: 1,
}

function ImageBanner(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => setWindowWidth((window.innerWidth)));
    }, [])

    homeBannerImg = {   // Adding image prop to the banner
        ...homeBannerImg,
        backgroundImage: `url('${props.image}')`,
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        minHeight: '50vw',
        overflow: 'hidden',
    }

    var homeBannerImgR;
    var textCont1R;
    if(windowWidth > 600 && windowWidth < 1280){    // Styling for tablets & small laptops
        
    }else if(windowWidth >= 1280) {     // Styling for Desktop
        homeBannerImgR = {
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '45vw',
            backgroundImage: `url('${props.image}')`,
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            overflow: 'hidden',
        }

        textCont1R = {
            background: 'rgba(26,56,111,.5)',
            padding: '150px 0 0 50px',
            flex: '1',
        }
    }

    return (
        <div style={ homeBannerImgR || homeBannerImg }>
            <div style={ textCont1R || textCont1 }>
                <h2 className="bannerTxt">
                    {props.line1}
                    <br/>
                    <b style={{fontWeight: '600'}}>{props.line2}</b>
                    <br/>
                    {props.line3} 
                </h2>
                {
                    props.buttonLink ? 
                    <div className="buttonCont">
                        <a href={props.buttonLink}>
                            <button className="bannerBtn">{props.buttonText}</button>
                        </a>
                    </div>
                    :null
                }
            </div>
            <div className="textCont2"></div>
        </div>
    )
}

export default ImageBanner;