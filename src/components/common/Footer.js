import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="text-center py-3">
                <div className="container py-md-3">
                    <h2 className="logo2 text-center">
                        <Link to="/">
                            <span className="fa fa-microchip"></span> Electro Hackers
				</Link>
                    </h2>
                    <div className="contact-left-footer mt-4">
                        <ul>
                            <li>
                                <p>
                                    <span className="fa fa-map-marker mr-2"></span>Paschimanchal Campus, WRC
						</p>
                            </li>
                            <li className="mx-4">
                                <p>
                                    <span className="fa fa-phone mr-2"></span>98499828022
						</p>
                            </li>
                            <li>
                                <p className="text-wh">
                                    <span className="fa fa-envelope-open mr-2"></span>
                                    <a href="mailto:agrohacks@gmail.com">agrohacks@gmail.com</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="footercopy-social my-4">
                        <ul>
                            <li className="ml-2">
                                <a href="https://github.com/ErKiran/Plant-Disease-Frontend-" target="_blank" rel="noopener noreferrer">
                                    <span className="fa fa-github-square"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w3l-copy text-center">
                        <p className="text-da">Made with <span style={{ color: '#e25555' }}>♥</span> in <a href="https://wrc.edu.np" className="text-danger" target="_blank">Paschimanchal Campus</a>
                        </p>
                    </div>
                </div>
            </footer>
            <a href="#" className="move-top text-center"></a>
        </>
    );
};

export default Footer;