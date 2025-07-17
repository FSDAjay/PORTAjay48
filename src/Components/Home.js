import { Fragment } from "react";
import './Home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from 'react-scroll';



function Home() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();

    }, [])


    return (
        <Fragment>
            <div>
                <div className=" cont container-fluid border border-success rounded  mb-3">
                    <div className="row">
                        <div className="col-12 col-lg-4 col-md-4 col-sm-12 p-5">
                            <h2 className="hel-h2">Hello, I'm</h2>
                            <h2 className="name-h2">Ajay.A.Jaiswar</h2>
                            <h2 className="status">Full Stack Developer</h2>
                            <p className="para">
                                We denounced with righteous indignation dislike demoralized by
                                charms of pleasure
                            </p>
                            <a href="">
                                <div className="btn btn-success">Hire Me </div>
                            </a>
                            <a href="">Download Resume</a>
                        </div>

                        <div className="home2 col-12 col-lg-4 col-md-4 col-sm-12 p-5">
                            <div className="back" data-aos="fade-down" data-aos-duration="2000">
                                <div className="back-img">
                                    <img className="backimg" src="./boytempimg.png" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-sm-6 col-md-2 col-lg-2 p-3">
                            <div className="record" data-aos="fade-up" data-aos-duration="2000">
                                <div className="record-2">
                                    <h3 className="records-h4 mx-3">1+</h3>
                                    <p className="record-para mx-3">Hand-on Experiance</p>
                                </div>

                                <div className="record-2">
                                    <h3 className="records-h4 mx-3">10+</h3>
                                    <p className="record-para mx-3">Projects Completed</p>
                                </div>

                                <div className="record-2">
                                    <h3 className="records-h4 mx-3">100%</h3>
                                    <p className="record-para mx-3">Dedication</p>
                                </div>

                                <div className="record-2">
                                    <h3 className="records-h4 mx-3">99.9%</h3>
                                    <p className="record-para mx-3">Client Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 col-lg-2 col-md-2 col-sm-6 p-1">
                            <div class="page" data-aos="fade-up" data-aos-duration="2000">
                                <Link to="Home" class="nav-link active " smooth={true} duration={500}><a href="#"><i className="fa fa-home"></i><span>Home</span></a> </Link>
                                <Link to="About" class="nav-link active " smooth={true} duration={500}> <a href="#"><i className="fa fa-user"></i><span>About</span></a> </Link>
                                <Link to="Skill" class="nav-link active " smooth={true} duration={500}> <a href="#"><i className="fa fa-toolbox"></i><span>Skills</span></a> </Link>
                                <Link to="Projects" class="nav-link active " smooth={true} duration={500}> <a href="#"><i className="fa fa-file"></i><span>Project</span></a></Link>
                                <Link to="Services" class="nav-link active " smooth={true} duration={500}> <a href="#"><i className="fa fa-gear"></i><span>Services</span></a> </Link>
                                <Link to="Contact" class="nav-link active " smooth={true} duration={500}><a href="#"><i className="fa fa-address-book"></i><span>Contact</span></a> </Link>
                                <Link to="Extra" class="nav-link active " smooth={true} duration={500}> <a href="#"><i className="fa fa-person-burst"></i><span>More</span></a> </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    )
}


export default Home;