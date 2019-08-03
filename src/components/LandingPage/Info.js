import React from 'react';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div>
            <section className="text py-5">
                <div className="container py-md-3 text-center">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-4 heading">The Best Time to <span text="text-danger">Stop Disease to Spread is </span>Detecting early</h3>
                            <p className="text-warning">Today, modern technology allows us to grow crops in quantities necessary for a steady food supply for billions of people. But diseases remain a major threat to this supply, and a large fraction of crops are lost each year to diseases. The situation is particularly dire for the 500 million smallholder farmers around the globe, whose livelihoods depend on their crops doing well. If the smartphone could be turned into a disease diagnostics tool, recognizing diseases from processed image would have been easily available to every farmer in any global position. </p>
                            <a href="services.html" className="btn mr-3">How It Works</a>
                            <Link to="/contact" className="btn btn1"> Contact Us </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Info;