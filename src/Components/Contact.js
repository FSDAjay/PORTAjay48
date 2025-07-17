import "./Contact.css";


function Contact() {
    return (
        <>

            <section id="Contact">
                <div className="cont container my-4 border border-success rounded">
                    <div className="row g-3 p-3">
                        <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                            <h6 className="cont-h6">Get In Touch</h6>
                            <h3 className="cont-h3">
                                Let's Talk For Your <span className="cont-span">Next Projects</span>
                            </h3>
                            <p className="Opinion">
                                Send us opinions for your future projects as per your
                                requirements or enquiry for us
                            </p>
                            <i id="tik" className="fa-solid fa-check"></i>
                            <h5 className="cont-h5">5+ Years Of Experience.</h5>
                            <i id="tik" className="fa-solid fa-check"></i>
                            <h5 className="cont-h5">Professional Web Design.</h5>
                            <i id="tik" className="fa-solid fa-check"></i>
                            <h5 className="cont-h5">Digital Marketing</h5>
                            <i id="tik" className="fa-solid fa-check"></i>
                            <h5 className="cont-h5">Custom Design Support.</h5>
                        </div>

                        <div className="col-lg-8 col-md-6 col-sm-4">
                            <div className="row justify-content-center align-items-center g3">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="head">Name:</div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i class="fa-regular fa-user"></i></span>
                                        <input type="text" className="form-control" placeholder="Enter Name" aria-label="Enter Name"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="head">E-mail Address:</div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa-regular fa-envelope"></i></span>
                                        <input type="Email" className="form-control" placeholder="Email" aria-label="Email"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="head">Phone no:</div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-phone"></i></span>
                                        <input type="tel" id="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control"
                                            placeholder="Enter Ph no" aria-label="Enter Ph no" aria-describedby="basic-addon1" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                    <div className="head">Subject:</div>
                                    <div className="input-group mb-3">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Subject</option>
                                            <option value="1">Enquiry</option>
                                            <option value="2">Wed Development</option>
                                            <option value="3">Front-End Developer</option>
                                            <option value="4">Back-End Developer</option>
                                            <option value="5">Further Web Updation</option>
                                            <option value="6">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 col-12 my-3 d-flex ju">
                                    <div className="mb">
                                        <label for="exampleFormControlTextarea1" className="form-label">Massage:</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" cols="60"></textarea>
                                    </div>
                                </div>

                                <a href="" className="btn btn btn-outline-success">Send Us Message</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Contact;