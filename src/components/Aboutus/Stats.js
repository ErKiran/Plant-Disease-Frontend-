import React, { Component } from 'react';

class Stats extends Component {
    render() {
        return (
            <section className="w3_stats" id="stats">
                <div className="overlay-clr py-sm-5">
                    <div className="container py-5">
                        <div className="w3-stats">
                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    <div className="counter">
                                        <span className="fa fa-smile-o"></span>
                                        <div className="timer count-title count-number mt-2">5100</div>
                                        <p className="count-text text-uppercase">happy customers</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="counter">
                                        <span className="fa fa-pagelines"></span>
                                        <div className="timer count-title count-number mt-2">2271</div>
                                        <p className="count-text text-uppercase">Disease Detected</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6 mt-lg-0 mt-5">
                                    <div className="counter">
                                        <span className="fa fa-users"></span>
                                        <div className="timer count-title count-number mt-2">1120+</div>
                                        <p className="count-text text-uppercase">Farmers</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6 mt-lg-0 mt-5">
                                    <div className="counter">
                                        <span className="fa fa-leaf"></span>
                                        <div className="timer count-title count-number mt-2">2690</div>
                                        <p className="count-text text-uppercase">Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Stats;