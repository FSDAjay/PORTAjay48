import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Header.css'

function Header() {
    return (
        <Navbar expand="lg" className="bg-dark border d-flex">
            <Container fluid>
                <Navbar.Brand href="#home" className="logo-img2 "><img className='logo-img' src="./boytempimg.png" alt="Description" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="d-flex justify-content-center align-item-center  ms-5 container">
                        <div className='d-flex mx-auto'>
                            <Nav.Link className='AJ-icon mx-4 fs-2' href="#Facebook"><i class="fa-brands fa-facebook"></i></Nav.Link>
                            <Nav.Link className='AJ-icon mx-4 fs-2' href="#Instagram"><i class="fa-brands fa-instagram"></i></Nav.Link>
                            <Nav.Link className='AJ-icon mx-4 fs-2' href="#Twitter"><i class="fa-brands fa-twitter"></i></Nav.Link>
                            <Nav.Link className='AJ-icon mx-4 fs-2' href="#linkin"><i class="fa-brands fa-linkedin"></i></Nav.Link>

                        </div>

                        <div >
                            {/* <Nav.Link className='AJ-icon fs-2 mx-3  mb-lg-0' href="#Instagram"><i class="fa-solid fa-address-book"></i></Nav.Link> */}
                        </div>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;