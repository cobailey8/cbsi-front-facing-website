import React from 'react';

const bl = {
    width: '100%',
    minHeight: 'inherit',
    margin: '5vw 0',
    display: 'flex',
    flexDirection: 'column',
}


export class ScalableInfoBlock extends React.Component {

    render() {
        var dataArr = [];
        Object.keys(this.props.jsonData).forEach(key => dataArr.push(this.props.jsonData[key]));

        const bgColor = {background: `${this.props.bgColor}`,}
        
        return (
            <div style={ bgColor } className="scalableInfoBlock">
                {
                    dataArr.map((item, i) => 
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
}

export default ScalableInfoBlock;
