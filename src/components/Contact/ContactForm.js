import React from 'react';

const ContactForm = () => {
    return (
        <form action="#" method="post">
            <div className="row">
                <div className="col-md-6 contact-left">
                    <input type="text" name="Name" placeholder="Your Name" required="" />
                    <input type="email" name="Email" placeholder="Email" required="" />
                    <input type="text" name="Mobile Number" placeholder="Mobile Number" required="" />
                </div>
                <div className="col-md-6 contact-right mt-md-0 mt-4">
                    <textarea name="Message" placeholder="Message" required=""></textarea>
                    <button className="btn">Submit</button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;