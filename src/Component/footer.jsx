import React, { useState } from "react";
import "../Css/navbar.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaTwitterSquare,
    FaGithubSquare,
    FaDiscord
    // IoLogoDiscord
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { HashLink as Link } from 'react-router-hash-link';


const Footer = () => {
    return (
        <>
            <div className="row d-none d-md-block" style={{ margin: "5em" }}>
                <div className="col-md-12 d-none d-md-block" >
                    <Link to='/home' activeStyle>
                        <img
                            src={require('../Assets/defuse__complete_logo.png')}
                            alt="dFuse logo"
                            style={{ maxWidth: "130px" }}
                        />
                        <br />


                    </Link>
                    <span className="p_text">&copy; 2022 All rights reserved. dFuse</span>
                </div>
                {/* <div className="col-md-2 d-none d-md-block p_text">
                    <br />&copy; 2022 All rights reserved. dFuse</div> */}
                <div className="col-md-12 d-none d-md-block text-right" style={{ textAlign: "right" }}>

                    <a
                        href="#"
                        target="_blank"
                        style={{ margin: "0 10px", color: "lightgrey", fontSize: "2.5rem" }}
                    >
                        <FaTwitterSquare className="" />
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        style={{ margin: "0 10px", color: "lightgrey", fontSize: "2.5rem" }}>
                        <FaGithubSquare className="" />
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        style={{ margin: "0 10px", color: "lightgrey", fontSize: "2.5rem" }}
                    >
                        <FaDiscord className="" />
                    </a>

                </div >



            </div >

            {/* For mobile screen */}

            <div className="row text-center d-sm-block d-md-none" style={{ margin: "5em" }}>
                <div className="col-sm-12  d-sm-block d-md-none text-center" >
                    <Link to='/home' activeStyle>
                        <img
                            src={require('../Assets/defuse__complete_logo.png')}
                            alt="dFuse logo"
                            style={{ maxWidth: "130px" }}
                        />


                    </Link>
                </div>

                <div className="col-sm-12 d-sm-block d-md-none text-center" style={{ textAlign: "center" }}>

                    <a
                        href="#"
                        target="_blank"
                        style={{ margin: " 0 4px", color: "lightgrey", fontSize: "20px" }}
                    >
                        <FaTwitterSquare className="" />
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        style={{ margin: "0 4px", color: "lightgrey", fontSize: "20px" }}>
                        <FaGithubSquare className="" />
                    </a>

                    <a
                        href="#"
                        target="_blank"
                        style={{ margin: "0 4px ", color: "lightgrey", fontSize: "20px" }}
                    >
                        <FaDiscord className="" />
                    </a>

                </div >
                <div className="col-sm-12 d-sm-block d-md-none p_text text-center">
                    &copy; 2022 All rights reserved. dFuse</div>

            </div >

        </>
    );
};

export default Footer;