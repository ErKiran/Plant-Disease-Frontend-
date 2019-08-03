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
                            <h4>Deep Learning <span className="fa fa-pagelines"></span></h4>
                            <p className="mt-2">Deep Neural Network Based on the VGG16 Artitecture</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 blog-middle mb-lg-0 mb-sm-5 pb-lg-0 pb-md-5">
                        <img src="images/s2.jpg" className="img-fliud" alt="" />
                        <div className="blog-info">
                            <h4>Cultivation <span className="fa fa-pagelines"></span></h4>
                            <p className="mt-2">Integer sit ut amet mattis quam, sit amet ultricies velit. Praesent ullam corper
							dui turpis sit.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 blog-right mt-lg-0 mt-5 pt-lg-0 pt-md-5">
                        <img src="images/s3.jpg" className="img-fliud" alt="" />
                        <div className="blog-info">
                            <h4>Harvesting <span className="fa fa-pagelines"></span></h4>
                            <p className="mt-2">Integer sit ut amet mattis quam, sit amet ultricies velit. Praesent ullam corper
							dui turpis sit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Expertiese;