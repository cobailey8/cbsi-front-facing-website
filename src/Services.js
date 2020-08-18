import React from 'react';
import ContactBlock from './components/ContactBlock';

//  Import Components
import ImageBanner from './components/ImageBanner';
import BasicInfoBlock from './components/BasicInfoBlock';
import ResponsiveGrid from './components/ResponsiveGrid';
import ImageInfoBlock from './components/ImageInfoBlock';
import Footer from './components/Footer';

// Import Data
import ServicesData from './data/services.json';

function Services() {

    var dataArr = [];
    Object.keys(ServicesData).forEach(key => dataArr.push(ServicesData[key]));

    return (
        <>
            <ImageBanner 
                image="/images/layingBricks.jpg"
                line1="Expert Masons." 
                line2="Quality Construction." 
                line3="Satisfaction Guaranteed."
            />
            <div className="content">

                <BasicInfoBlock 
                    heading="Restoration. Repair. Waterproofing."
                    subHeading="At CBSI, we develop, construct and maintain inspired landmarks that turn our clients’ aspirations into reality."
                    text="
                        Whether it’s a large scale waterproofing project to a small job that must get done, we apply 
                        the same quality, results driven attitude to get the job done. Although we offer a wide range
                        of services, we specialize in moisture-related problems which can create headaches for property 
                        owners and managers. They detract from a property’s overall appearance and undermine its 
                        structural integrity, posing potentially serious safety threats to tenants. We combine experience 
                        with state-of-the-art techniques and materials to fix damaged building façades and restore them to 
                        their original beauty and structural integrity.
                    "
                />

                <ResponsiveGrid jsonData={ ServicesData } heading="Services"/>

                {
                    dataArr.map((item, i) => {
                        var dataList = '';

                        if(item.list){

                            dataList += i < dataArr.length-1 
                                ? '<ul>'
                                : '<ul style="list-style-type: none">';

                            for(var j = 0; j < item.list.length; j++){
                                dataList += '<li>' + item.list[j] + '</li>';
                            }
                            
                            dataList += '</ul>';
                        }

                        console.log("find"+item.id);
                        
                        return item.image !== "" ? 
                            <ImageInfoBlock 
                                key={item.id}
                                id={item.id}
                                isDark={ i%2!==0 } 
                                flip={ i%2===0  }
                                image={item.image} 
                                headerContent={item.heading} 
                                textContent={ 
                                    item.longText || <div dangerouslySetInnerHTML={{__html: dataList}}></div>
                                }
                            />
                        : 
                            <div key={item.id} style={{padding: '4vw',}} id={"find"+item.id}>
                                <h1>{item.heading}:</h1>
                                <div dangerouslySetInnerHTML={{__html: dataList}} style={{fontWeight: '600', lineHeight: '30px'}}></div>
                            </div>
                        ;
                    })
                }

                <ContactBlock/>

            </div>

            <Footer />
        </>
    );
}

export default Services;
