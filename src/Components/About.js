import "./About.css";


function About() {
    return (
        <>
            <section id="About">
                <div className=" cont container border border-success rounded my-3 py-3">
                    <div className="row">
                        <div className="col-12 col-lg-8 col-md-8 col-sm-12">
                            <p className="About-h">About ME</p>
                            <h3 className="About-h3">
                                Professional
                                <span className="about-span">Problem Solutions</span> For Website
                                Developments
                            </h3>
                            <p className="Intro-about">
                                I'm Full Stack Developer with python focuses on crafting clean &
                                user friendly experiences, I am passionate about building
                                excellent website that improves the lives of those around me.
                            </p>
                            <div className="know">
                                <i className="fa-solid fa-square-envelope"></i>
                                <p className="cont-para">ajayjaiswar0241@Gmail.com</p>
                                <i className="fa-solid fa-phone"></i>
                                <p className="cont-para">+91 99872 97626</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 col-md-4 col-sm-12">
                            <div className="about-more">
                                <img className="about-img" src="./boytempimg.png" alt="" data-aos="fade-left" data-aos-duration="1000" />
                                <div className="about-more2" data-aos="fade-right" data-aos-duration="1000">
                                    <i className="fa-solid fa-computer"></i><span className="span-ab">Experience Developer</span>
                                </div>
                                <div className="about-more3" data-aos="fade-right" data-aos-duration="1000">
                                    <i className="fa-solid fa-trowel-bricks"></i><span className="span-ab">Skill Loaded</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )

}

export default About;