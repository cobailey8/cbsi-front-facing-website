import React from 'react';
import ImageBanner from './components/ImageBanner';

// Component Imports
import Spotlight from './components/ProjectSpotlight';
import ContactBlock from './components/ContactBlock';
import Footer from './components/Footer';
import ScalableInfoBlock from './components/ScalableInfoBlock';

// Data imports
import ProjectsData from './data/projects.json';
import InfoData from './data/homeInfoBlockData.json';


// End Styles

function Home() {

  return (
    <>    
        <div className="content">

            <ImageBanner 
                image="/images/home.png"
                line1="Restoration." 
                line2="Repair." 
                line3="Waterproofing."
                buttonText="View All Serivices"
                buttonLink="/services"
            />

            <ScalableInfoBlock jsonData={ InfoData }/>

            <Spotlight heading="Projects Spotlight" jsonData={ ProjectsData }/>
            
            <ContactBlock />

            <Footer />

        </div>
    </>
  );
}

export default Home;