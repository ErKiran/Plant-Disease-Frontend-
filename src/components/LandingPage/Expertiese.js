import React from 'react';

const Expertiese = () => {
    return (
        <section className="blog py-5">
            <div className="container py-md-5">
                <h3 className="heading mb-sm-5 mb-4 text-center"> Our Area of Works</h3>
                <div className="row blog-grids">
                    <div className="col-lg-4 col-md-6 blog-left mb-lg-0 mb-sm-5 pb-lg-0 pb-5">
                        <img src="images/deep.jpeg" className="img-fliud" alt="" />
                        <div className="blog-info">
                            <h4>Deep Learning <span className="fa fa-connectdevelop"></span></h4>
                            <p className="mt-2">Deep Neural Network Based on the VGG16 Artitecture which predicts the Disease based on image of leaf</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">
                        <img src="images/car.jpg" className="img-fliud" alt="" />
                        <div className="blog-info">
                            <h4>Agro Bot <span className="fa fa-microchip"></span></h4>
                            <p className="mt-2">Arudino Powered Car with integrated Raspberry Pi Camera to communicate
                            with Web API via HTTP Protocol and Google Drive</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 blog-right mt-lg-0 mt-5 pt-lg-0 pt-md-5">
                        <img src="images/rest-api.jpg" className="img-fliud" alt="" />
                        <div className="blog-info">
                            <h4>Micro Services<span className="fa fa-arrows-alt"></span></h4>
                            <p className="mt-2">RESTFul Web Applications to Communicate with the Server, Machine Learning Model and
                            Agro Bot</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Expertiese;