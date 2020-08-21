import React from 'react';

const bl = {
    width: '100%',
    minHeight: 'inherit',
    margin: '5vw 0 5vw 0',
    display: 'flex',
    flexDirection: 'column',
}


function ScalableInfoBlock(props) {
    var dataArr = [];
    Object.keys(props.jsonData).forEach(key => dataArr.push(props.jsonData[key]));

    const bgColor = {background: `${props.bgColor}`,}
    
    return (
        <div style={ bgColor } className="scalableInfoBlock">
            {
                dataArr.map((item) => 
                    <div style={ bl } key={item.id}>
                        <div className="infoHeadingText">
                            {item.heading}
                            <hr/>
                        </div>
                        <div className="infoBlText">
                            {item.text}
                        </div>
                        <a href={item.link} style={{textDecoration: 'none'}}>
                            <div className="infoBtnTxtBl">
                                <div className="infoBlBtn"></div>
                                <div className="infoBlBtnTxt">{ item.buttonTxt }</div>
                            </div>
                        </a>
                    </div>
                )
            }
        </div>
    );
}

export default ScalableInfoBlock;
