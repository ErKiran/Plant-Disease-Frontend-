import React from 'react';

const Heading = (props) => {
    return (
        <section className="contact py-5">
            <div className="container py-sm-3">
                <h3 className="heading mb-sm-5 mb-4 text-center">{props.title}
                    <span className={props.icon} aria-hidden="true"></span>
                </h3>
            </div>
        </section>
    );
};

export default Heading;