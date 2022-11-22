import React, { Component } from 'react';
import CoverContent from './cover_content';
import SideImage from './side_image';
import About from './about';
import Teams from './teams';
import { HashLink as Link } from 'react-router-hash-link';
import "./../Css/main.css"
import Astroimage from "../Assets/astronaut-PNG.png"
import Vaultimage from "../Assets/vault-2.png"
import Teamimage from "../Assets/team.png"
import Footer from './footer';


class HomeScreen extends Component {
    render() {
        return <>
            <div
                className='home-bg'
            >
                <div className="row align-middle " style={{ margin: "5em" }}>
                    {/* <div className='col-md-1 col-sm-none '></div> */}
                    <div className='col-12'>
                        <Link to='/home'>
                            <img
                                src={require('../Assets/defuse__complete_logo.png')}
                                alt="dFuse logo"
                                style={{ maxWidth: "130px" }}
                            />


                        </Link>
                    </div>

                    <div className="col-md-6 d-none d-md-block  p-sm-2 ">
                        <br />
                        <CoverContent />
                    </div>
                    <div
                        className='col-md-6 d-none d-md-block  text-center'
                    >
                        <SideImage image_src={Astroimage} cl_name={'astro_image'} />
                    </div>



                    <div
                        className='col-sm-12 d-sm-block d-md-none'
                    >
                        <SideImage image_src={Astroimage} cl_name={'astro_image'} />
                    </div>
                    <div className="col-sm-12 p-sm-2  d-sm-block d-md-none">
                        <CoverContent />
                    </div>
                </div>
            </div>
            <div
                className='how_it_work_bg'
            >
                <div className="row " style={{ margin: "5em" }}>
                    {/* <div className='col-md-1 col-sm-none '></div> */}
                    <div className="col-md-6 d-none d-md-block  p-sm-2 ">
                        <br />
                        <About />
                    </div>
                    <div
                        className='col-md-6 d-none d-md-block  text-center'
                    >
                        <SideImage image_src={Vaultimage} cl_name={"vaultimage"} />
                    </div>



                    <div
                        className='col-sm-12  text-center d-sm-block d-md-none'
                    >
                        <SideImage image_src={Vaultimage} cl_name={"vaultimage"} />
                    </div>
                    <div className="col-sm-12 p-sm-2  d-sm-block d-md-none">
                        <About />
                    </div>
                </div>
            </div>
            <div
                className='teams_bg'
            >
                <div className="row " style={{ margin: "5em" }}>

                    <div className="col-md-6 d-none d-md-block  p-sm-2 ">
                        <br />
                        <SideImage image_src={Teamimage} cl_name={"teamimage"} />
                    </div>
                    <div
                        className='col-md-6 d-none d-md-block '
                    >
                        <Teams />
                    </div>



                    <div
                        className='col-sm-12   d-sm-block d-md-none'
                    >
                        <SideImage image_src={Teamimage} cl_name={"teamimage"} />
                    </div>
                    <div className="col-sm-12 p-sm-2  d-sm-block d-md-none">
                        <Teams />
                    </div>
                </div>
            </div>
            <div
                className="footer-bg"
            >
                <Footer />
            </div>
        </>


    }
}

export default HomeScreen;