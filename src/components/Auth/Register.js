import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return (
            <div>
                <div className="w3layouts-main">
                    <div className="bg-layer">
                        <div className="header-main">
                            <div className="main-icon">
                                <span className="fa fa-leaf"></span>
                            </div>
                            <div className="header-left-bottom">
                                <form action="#" method="post">
                                    <div className="icon1">
                                        <span className="fa fa-user"></span>
                                        <input type="email" placeholder="Email Address" required="" />
                                    </div>
                                    <div className="icon1">
                                        <span className="fa fa-lock"></span>
                                        <input type="password" placeholder="Password" required="" />
                                    </div>
                                    <div className="icon1">
                                        <span className="fa fa-lock"></span>
                                        <input type="password" placeholder="Confirm Password" required="" />
                                    </div>
                                    <div className="login-check">
                                        <label className="checkbox"><input type="checkbox" name="checkbox" checked="" /><i> </i> Keep me logged in</label>
                                    </div>
                                    <div className="bottom">
                                        <button className="btn">Log In</button>
                                    </div>
                                    <div className="links">
                                        <p className="right"><Link to="/register">New User? Register</Link></p>
                                        <div className="clear"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;