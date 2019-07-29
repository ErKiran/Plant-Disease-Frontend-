import React from 'react';

const Slides = (props) => {
    return (
        <li>
            <div className={props.banner}>
                <div className={props.overlay}>
                    <div className="container">
                        <div className="w3layouts-banner-info text-center">
                            <h3 className="text-wh">{props.title}</h3>
                            <h4 className="text-wh mx-auto my-4">{props.main_desc}</h4>
                            <p className="text-li mx-auto mt-2">{props.sub_desc}</p>
                            <a href="about.html" className="button-style mt-sm-5 mt-4">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Slides;