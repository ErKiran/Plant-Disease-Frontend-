import React from 'react';

const Corevalue = () => {
    return (
        <div className="core-value py-5">
            <div className="container py-md-4">
                <h3 className="heading mb-sm-5 mb-4 text-center">Our Main Objectives</h3>
                <div className="row core-grids">
                    <div className="col-lg-6 core-left">
                        <img src="images/tomato.jpg" className="img-fliud" alt="" />
                    </div>
                    <div className="col-lg-6 core-right">
                        <h4 className="mt-4">Detecting Disease Early as Possible</h4>
                        <p className="mt-3">Healthy Plant Yields Healthy Product and Healthy Income to the Farmers also.
                        We aim to detect disease as early as possible reducing the risk</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Corevalue;