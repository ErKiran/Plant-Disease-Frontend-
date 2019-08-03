import React from 'react';

const ContactInfo = () => {
    return (
        <div className="row map-pos">
            <div className="col-lg-4 col-md-6 address-row">
                <div className="row">
                    <div className="col-2 address-left">
                        <div className="contact-icon">
                            <span className="fa fa-home" aria-hidden="true"></span>
                        </div>
                    </div>
                    <div className="col-10 address-right">
                        <h5>Visit Us</h5>
                        <p>Paschimanchal Campus Pokhara,Gandaki</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 address-row w3-agileits">
                <div className="row">
                    <div className="col-2 address-left">
                        <div className="contact-icon">
                            <span className="fa fa-envelope" aria-hidden="true"></span>
                        </div>
                    </div>
                    <div className="col-10 address-right">
                        <h5>Mail Us</h5>
                        <p><a href="mailto:agrohacks@gmail.com">agrohacks@gmail.com</a></p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 address-row">
                <div className="row">
                    <div className="col-2 address-left">
                        <div className="contact-icon">
                            <span className="fa fa-phone" aria-hidden="true"></span>
                        </div>
                    </div>
                    <div className="col-10 address-right">
                        <h5>Call Us</h5>
                        <p>9849928022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ContactInfo;