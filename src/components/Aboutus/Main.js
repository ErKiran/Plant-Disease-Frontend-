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
                        <p>Donec consequat sapien ut leo cursus rhoncus. Nullam dui mi, vulputate ac metus
                            at, semper varius orci. Nulla accumsan ac elit in congue. className aptent taciti sociosqu ad litora torquent
                        per conubia aptent taciti sociosqu ad lorem ipsum dolor.</p>
                        <p className="pt-3 mt-3 border-top"><span className="fa fa-quote-left text-color mr-2"></span>Nullam consequat sapien ut
                            leot cursus rhoncus. Nullam dui mi, vulputate ac metus at, semper varius orci. Nulla sed accumsan ac elit in congue. className aptent taciti sociosqu ad
                        litora torquent per taciti sociosqu ad litora torquent.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;