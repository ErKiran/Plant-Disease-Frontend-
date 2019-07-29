import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="text-center py-3">
                <div className="container py-md-3">
                    <h2 className="logo2 text-center">
                        <a href="index.html">
                            <span className="fa fa-leaf"></span> Electro Hackers
				</a>
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
                                    <a href="mailto:info@example.com">detect_disease@gmail.com</a>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="footercopy-social my-4">
                        <ul>
                            <li className="ml-2">
                                <a href="https://github.com/ErKiran/Plant-Disease-Frontend-">
                                    <span className="fa fa-github-square"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w3l-copy text-center">
                        <p className="text-da">©{new Date().getFullYear()} Electronics Hacker
                    </p>
                    </div>
                </div>
            </footer>
            <a href="#home" class="move-top text-center"></a>
        </>
    );
};

export default Footer;