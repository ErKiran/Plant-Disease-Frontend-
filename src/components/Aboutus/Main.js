import React from 'react';

const Main = () => {
    return (
        <section className="about py-5" id="about">
            <div className="container py-lg-5 py-sm-3">
                <h3 className="heading mb-sm-5 mb-4 text-center"> About Electro Hackers</h3>
                <div className="row">
                    <div className="col-lg-6 about-left">
                        <h5 className="mb-3">Few Words About Us!</h5>
                        <h3 className="mb-lg-4 mb-2">We are innovators in agricultural business</h3>
                        <h4 className=""> Our Goal is Healthy Plants, Healthy Crops</h4>
                    </div>
                    <div className="col-lg-6 pl-xl-5 mt-lg-0 mt-4 about-right">
                        <p>We tend to bridge the lack of  skilled manpower in the agriculture sector in the rular area of Nepal and other developing Countries.
                        We tend  to automate the process of  monitoring crops by farmer
                        utilizing cutting Edge Technologies to attemp to increase
                        the production of the crop yield.
                         </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;