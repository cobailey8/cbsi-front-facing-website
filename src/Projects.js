import React from 'react';

import ContactBlock from './components/ContactBlock';

//  Import Components
import ImageBanner from './components/ImageBanner';
import BasicInfoBlock from './components/BasicInfoBlock';
import ResponsiveGrid from './components/ResponsiveGrid';
import ImageInfoBlock from './components/ImageInfoBlock';
import Footer from './components/Footer';

//  Import Data
import ProjectsData from './data/projects.json';

function Projects() {

    var dataArr = [];
    Object.keys(ProjectsData).forEach(key => dataArr.push(ProjectsData[key]));

    return (
        <div className="content">
            <ImageBanner 
                image="/images/safety.jpg"
                line1="Our Expertise" 
                line2="Speaks" 
                line3="For Itself."
            />

            <BasicInfoBlock 
                heading="Our Expertise Speaks For Itself."
                subHeading="
                    Take a look at some of the projects CBSI has had the privelage to be a part of!
                "
                text="
                    We take pride in the work we do, always putting our client's vision at the forefront, and emphasising 
                    the design process for optimum outcomes on every project.
                "
            />

            <ResponsiveGrid jsonData={ ProjectsData } heading="Projects"/>

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
                    
                    return (
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
                    )
                })
            }

            <ContactBlock/>

            <Footer />

        </div>
    );
}

export default Projects;
