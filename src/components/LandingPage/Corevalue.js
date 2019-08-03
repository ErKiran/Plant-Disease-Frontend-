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
                        <p className="mt-3">The basic objective of this project is to design a system that takes an image of the infected plant leaf and predicts that image being diseased or not along with its control measures if diseased.

                        The core objectives that are fundamentals to the project are:<br />

                            <p className="text-danger"> To detect diseases in the farm as early as possible.<br /> </p>

                            <p className="text-danger"> To inform farmers about the nature of the diseases and provide possible remedies. <br /></p>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Corevalue;