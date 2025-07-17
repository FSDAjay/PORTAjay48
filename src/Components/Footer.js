import "./Footer.css";
import { Link } from 'react-scroll';

function Footer() {
    return (
        <>

            <footer className="foot bg-dark">
                <div className="container-fluid  py-3 text-center">
                    <div className="row">
                        <div className="col-12 col-lg-5 col-md-5 col-sm-6">
                            <p className="ft-para mx-5">
                                Copywrite @2024,<span className="ft-span">AJ/FSD48 </span>All Right
                                Reserved
                            </p>
                        </div>



                        <div className="col-12 col-lg-2 col-md-2 col-sm-4">
                            <Link to="Header" class="nav-link active " smooth={true} duration={500}> <a href="#"><button className="top-bt">Up</button></a></Link>

                        </div>

                        <div className="col-12 col-lg-5 col-md-5 col-sm-6">
                            <a className="qui-lnk mx-3" href="#">Facebook</a>
                            <a className="qui-lnk mx-3" href="#">Instagram</a>
                            <a className="qui-lnk mx-3" href="#">Twitter</a>
                            <a className="qui-lnk mx-3" href="#">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}


export default Footer;