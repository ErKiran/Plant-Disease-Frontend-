import React from 'react';

const Navmenu = () => {
    return (
        <div className="container">
            <nav className="py-4 d-lg-flex">
                <div id="logo">
                    <h1> <a href="index.html"><span className="fa fa-leaf"></span> Agro Harvest</a></h1>
                </div>
                <label htmlFor="drop" className="toggle"><span className="fa fa-bars"></span></label>
                <input type="checkbox" id="drop" />
                <ul className="menu mt-md-2 ml-auto">
                    <li className="mr-lg-4 mr-2 active"><a href="index.html">Home</a></li>
                    <li className="mr-lg-4 mr-2"><a href="about.html">About Us</a></li>
                    <li className="mr-lg-4 mr-2"><a href="services.html">Services</a></li>
                    <li className="mr-lg-4 mr-2"><a href="comingsoon.html">Gallery</a></li>
                    <li className="mr-lg-4 mr-2"><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navmenu;