import React, { useState } from "react";
import "../../Css/navbar.css";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaYoutubeSquare,
    FaTwitterSquare,
    FaGithubSquare,
    FaDiscord
    // IoLogoDiscord
} from "react-icons/fa";
// import {
//     IoLogoDiscord
// } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

// import { NavLink as Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                {/* 1st logo part  */}
                <div className="logo">
                    <Link to='/home' activeStyle>
                        <img
                            src={require('../../Assets/defuse__complete_logo.png')}
                            // src={require('../../Assets/dfuse_logo_horizontal.svg')}
                            alt="dFuse logo"
                            style={{ maxWidth: "120px" }}
                        />


                    </Link>
                </div>

                {/* 2nd menu part  */}
                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        {/* <li>
                            <Link
                                to={{
                                    pathname: '/howItWorks',
                                    // hash: '#HowItWorks',
                                    state: { isAdmin: true }
                                }}
                            // activeStyle
                            >
                                About
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link
                                to={{
                                    pathname: '/strategies',
                                    // hash: '#Strategies',
                                    state: { isAdmin: true }
                                }}
                            // activeStyle
                            >
                                Strategies
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link
                                to={{
                                    pathname: '/risk',
                                    // hash: '#Risk_Parity',
                                    state: { isAdmin: true }
                                }}
                            // activeStyle
                            >
                                Risk Parity
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link
                                to={{
                                    pathname: '/tokenomics',
                                    // hash: '#Tokenomics',
                                    state: { isAdmin: true }
                                }}
                            // activeStyle
                            >
                                Tokenomics
                            </Link>
                        </li> */}
                        {/* <li>
                            <Link
                                to={{
                                    pathname: '/teams',
                                    // hash: '#Teams',
                                    state: { isAdmin: true }
                                }}
                            // activeStyle
                            >
                                Teams
                            </Link>
                        </li> */}
                    </ul>
                </div>

                {/* 3rd social media links */}
                <div className="social-media">
                    <ul className="social-media-desktop">
                        <li>
                            <a
                                href="#"
                                target="_blank">
                                <FaTwitterSquare className="twitter" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                target="_blank">
                                <FaGithubSquare className="github" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                target="_blank">
                                <FaDiscord className="discord" />
                            </a>
                        </li>
                    </ul>

                    {/* hamburget menu start  */}
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;