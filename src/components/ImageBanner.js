import React from 'react';

// Styles

const homeBannerImg = {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '60vw',
    margin: '0 0 0 0',
}

const textCont1 = {
    background: 'rgba(26,56,111,.5)',
    padding: '10vw 0 0 6vw',
    flex: '1',

}

function ImageBanner(props) {

    const img = {
        backgroundImage: `url('${props.image}')`,
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        minHeight: '50vw',
        overflow: 'hidden',
    }

    return (
        <div style={ {...homeBannerImg, ...img} }>
            <div style={ textCont1 }>
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