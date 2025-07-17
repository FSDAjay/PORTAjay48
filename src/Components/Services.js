import "./Services.css";


function Services() {
    return (
        <>

            <section className="my3">
                <div id="services" className="cont container border border-success rounded">
                    <div className="heading text-center py-3">
                        <h6 className="services-h6">Services</h6>
                    </div>
                    <div className="heading text-center py-3">
                        <h3 className="services-h3">
                            My <span className="ser-h3">Special Services</span> for your Bussiness
                            Development
                        </h3>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 box col-sm-12 col-md- col-lg-5 m-3 border-gray rounded">
                            <p className="ser-para">01 . Front-End Developing</p>
                        </div>

                        <div className="col-12 box col-sm-12 col-md- col-lg-5 m-3 border-gray rounded">
                            <p className="ser-para">02 . Back-End Developing</p>
                        </div>

                        <div className="col-12 box col-sm-12 col-md-5 col-lg-5 m-3 border-gray rounded">
                            <p className="ser-para">03 . Web Developing</p>
                        </div>

                        <div className="col-12 box col-sm-12 col-md- col-lg-5 m-3 border-gray rounded">
                            <p className="ser-para">04 . Backend Data Manipulation</p>
                        </div>

                        <div className="col-12 box col-sm-12 col-md- col-lg-5 m-3 border-gray rounded">
                            <p className="ser-para">05 . Vedio Editing</p>
                        </div>

                        <div className="col-12 box col-sm-12 col-md- col-lg-5 m-3 border-gray rounded">
                            <p className="ser-para">06 . Digital Marketing</p>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}

export default Services;