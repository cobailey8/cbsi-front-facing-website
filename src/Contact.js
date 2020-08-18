import React from 'react';
import ImageBanner from './components/ImageBanner';

//  Import Components
import ContactBlock from './components/ContactBlock';
import EmailForm from './components/EmailForm';
import Footer from './components/Footer';

function Contact() {
    return (
        <div className="content">
            <ImageBanner 
                image="/images/hilton.jpg"
                line1="Contact Us" 
                line2="For a Quote" 
                line3="Today."
            />

            <EmailForm heading="Request an Estimate"/>

            <ContactBlock />

            <Footer />

        </div>
    );
}

export default Contact;
