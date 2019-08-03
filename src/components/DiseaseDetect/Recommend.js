import React from 'react';

const Recommend = (props) => {
    return (
        <section className="blog py-5">
            <div className="container py-md-5">
                <h3 className="heading mb-sm-5 mb-4 text-center">Detailed Information</h3>
                <div className="row blog-grids">
                    <div className="col-lg-4 col-md-6 blog-left mb-lg-0 mb-sm-5 pb-lg-0 pb-5">
                        <img src="images/bacteria.jpg" className="img-fliud" alt="" />
                        <div className="blog-info">
                            <h4>{props.info1}<span className="fa fa-connectdevelop"></span></h4>
                            <p className="mt-2">{props.agent}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">
                        <img src="images/symptoms.jpeg" className="img-fliud" alt="" />
                        <div className="blog-info">
                            <h4>{props.info2}<span className="fa fa-microchip"></span></h4>
                            <p className="mt-2">{props.effect}</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 blog-right mt-lg-0 mt-5 pt-lg-0 pt-md-5">
                        <img src="images/control.jpg" className="img-fliud" alt="" />
                        <div className="blog-info">
                            <h4>{props.info3}<span className="fa fa-arrows-alt"></span></h4>
                            <p className="mt-2">{props.control}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Recommend;