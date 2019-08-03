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
                            <h3 className="mt-4">Micro Services</h3>
                            <p className="mt-3">Back-end Server is powered by Node.js and Machine Learning Model
                            is Served with the Courtesy of Django following Principle of REST </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-md-0 mt-4">
                        <div className="bottom-gd px-2 text-center">
                            <div className="f-icon">
                                <span className="fa fa-rocket" aria-hidden="true"></span>
                            </div>
                            <h3 className="mt-4"> Deep Learning</h3>
                            <p className="mt-3">Convolutional Neural Network is chosen having 13 convolution layers and 3 fully connected layer.
                            The convolution layers were followed by Max-Pool operation and Batch Normalization was done after Max-Pool. </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                        <div className="bottom-gd px-2 text-center">
                            <div className="f-icon">
                                <span className="fa fa-microchip" aria-hidden="true"></span>
                            </div>
                            <h3 className="mt-4">Electronics Chips</h3>
                            <p className="mt-3"> Arduino UNO as a Microcontroller device
                            L298N motor driver and Pi Camera Module which is used to capture still images of leaves for the disease detection.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;