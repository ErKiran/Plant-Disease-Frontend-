import React from 'react';

const About = () => {
    return (
        <div className="about py-5">
            <div className="container py-md-4">
                <h3 className="heading text-center mb-4">Unifing Deep Learning With Internet of Things</h3>
                <p className="about-text mx-auto text-center">Deep Convolution Neural Network more precisely VGG-16
                with Agro Bot made up from Arudino, Raspberry Pi and Friends communication with Cloud Server powered by
                Crome V8 base Node.js</p>
                <div className="feature-grids row mt-5 text-center">
                    <div className="col-lg-4 col-md-6 ">
                        <div className="bottom-gd px-2 text-center">
                            <div className="f-icon">
                                <span className="fa fa-server" aria-hidden="true"></span>
                            </div>
                            <h3 className="mt-4">Node.js</h3>
                            <p className="mt-3">Back-end Server is powered by Node.js</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <div className="bottom-gd px-2 text-center">
                            <div className="f-icon">
                                <span className="fa fa-rocket" aria-hidden="true"></span>
                            </div>
                            <h3 className="mt-4"> Deep Learning</h3>
                            <p className="mt-3">Some Description Here</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                        <div className="bottom-gd px-2 text-center">
                            <div className="f-icon">
                                <span className="fa fa-microchip" aria-hidden="true"></span>
                            </div>
                            <h3 className="mt-4">Electronics Chips</h3>
                            <p className="mt-3">Integer sit amet mattis quam, sit amet ul tricies velit. Praesent ullam corper
							dui turpis dolor sit amet quam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;