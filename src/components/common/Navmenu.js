import React from 'react';
import { Link } from 'react-router-dom';

const Navmenu = () => {
    return (
        <header>
            <div className="container">
                <nav className="py-4 d-lg-flex">
                    <div id="logo">
                        <h1> <Link to="/"><span className="fa fa-leaf"></span> Agro Hacks</Link></h1>
                    </div>
                    <label htmlFor="drop" className="toggle"><span className="fa fa-bars"></span></label>
                    <input type="checkbox" id="drop" />
                    <ul className="menu mt-md-2 ml-auto">
                        <li className="mr-lg-4 mr-2 active"><Link to="/">Home</Link></li>
                        <li className="mr-lg-4 mr-2"><Link to="/about_us">About Us</Link></li>
                        <li className="mr-lg-4 mr-2"><Link to="/detect">Detect Disease</Link></li>
                        <li className="mr-lg-4 mr-2"><Link to="/connect_drive">Connect Drive</Link></li>
                        <li className="mr-lg-4 mr-2"><Link to="contact">Contact</Link></li>
                        <li className="mr-lg-4 mr-2"><Link to="login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navmenu;