import React from 'react';

const Title = (props) => {
    return (
        <section className="about py-5" id="about">
        <div className="container py-lg-5 py-sm-3">
            <h3 className="heading mb-sm-5 mb-4 text-center">{props.title}</h3>
            {props.children}
        </div>
        </section>
    );
};

export default Title;