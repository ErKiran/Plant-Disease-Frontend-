import React from 'react';

import SingleBanner from '../common/SingleBanner';
import ContactInfo from './ContactInfo';
import Map from './Map';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div>
            <SingleBanner />
            <section className="contact py-5">
                <div className="container py-sm-3">
                    <h3 className="heading mb-sm-5 mb-4 text-center">Contact Us</h3>
                    <h1 className="heading mb-sm-5 mb-4 text-center">Have an Idea or Queries!!</h1>
                    <ContactInfo />
                    <ContactForm />
                    <Map />
                </div>
            </section>
        </div>
    );
};

export default Contact;