import React from 'react';
import ImageBanner from './components/ImageBanner';

// Import Components
import QuoteBlock from './components/QuoteBlock';
import ImageInfoBlock from './components/ImageInfoBlock';
import SimpleButtonBlock from './components/SimpleButtonBlock';
import Footer from './components/Footer';

// End Styles


function About() {

    return (
        <>
            <ImageBanner 
                image="/images/aboutBanner.jpg"
                line1="Your Vision." 
                line2="Our Execution." 
                line3="Since 1994."
            />

            <div className="content">

                <QuoteBlock 
                    quote="Our tradition and values are what makes this company great. We always strive to go above and beyond. "
                    author="Jack Mencia"  
                    authorDesc="CEO"  
                />

                <ImageInfoBlock 
                    id = "ABOUT CBSI"
                    isDark={ true } 
                    flip={ false }
                    image="./images/construction2.jpg" 
                    headerContent="ABOUT CBSI" 
                    textContent="
                        We are a full service building restoration company serving the Washington 
                        Metropolitan and surrounding areas for over 20 years.  Our unique ability 
                        and willingess to take on the most complicated project is what sets us apart 
                        from our competitors. Property Managers and Building Engineers turn to us 
                        again and again to get their projects done on-time and on-budget.  At CBSI, 
                        we are committed to giving or customers value added service and quality results 
                        that will last.
                    " 
                />

                <ImageInfoBlock 
                    id = "OUR MISSION"
                    isDark={ false } 
                    flip={ true }
                    image="./images/safety.jpg" 
                    headerContent="OUR MISSION" 
                    textContent="
                        Our safety-oriented focus on customer service and quality craftsmanship has been 
                        valued by our customers. We’ve had the unique privilege of working on some of the 
                        most prestigious commercial, multi-family and historic government properties in the 
                        Washington, D.C. metropolitan area.  Click on the “View Projects” button below to see 
                        a comprehensive list of our projects.
                    " 
                />

                <ImageInfoBlock 
                    id = "OUR VALUES"
                    isDark={ true } 
                    flip={ false }
                    image="./images/layingBricks.jpg" 
                    headerContent="OUR VALUES" 
                    textContent="
                        Our safety-oriented focus on customer service and quality craftsmanship has been 
                        valued by our customers. We’ve had the unique privilege of working on some of the 
                        most prestigious commercial, multi-family and historic government properties in the 
                        Washington, D.C. metropolitan area.  Click on the “View Projects” button below to see 
                        a comprehensive list of our projects.
                    " 
                />

                <SimpleButtonBlock 
                    buttonText="View All Projects"
                    href="/projects"
                />

                <QuoteBlock 
                    image="./images/layingBricks2.jpg"
                    text="This is some placeholder text that goes with the image, and should be a quote."
                    author="John Doe"
                />

            </div>
            <Footer />
        </>
    );
}

export default About;
