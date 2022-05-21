import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

class TopHeader extends Component {
    render() {
        return (
            // <div className='shadow-sm p-3 mb-5 bg-white rounded d-flex justify-content-center align-items-center'>
            //     <img className='p-1' height={25} src="/images/docicon.PNG" alt="" />
            //     <img  className='p-1' height={25} src="/images/TM.PNG" alt="" />
            //     <div>
            //         <NavDropdown title="Link" id="navbarScrollingDropdown">
            //             <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            //             <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            //             <NavDropdown.Divider />
            //             <NavDropdown.Item href="#action5">
            //                 Something else here
            //             </NavDropdown.Item>
            //          </NavDropdown>
            //     </div>
            // </div>
           <div className="fluid shadow-sm px-3  bg-white rounded">
                <Navbar className=' d-flex justify-content-center align-items-center'>
                <Container >
                <Navbar.Brand href="#home">
                     <img className='p-1' height={25} src="/images/docicon.PNG" alt="" />
                    <img  className='p-1' height={25} src="/images/TM.PNG" alt="" />
                </Navbar.Brand >
                   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                        <NavDropdown title="Dropdown"  id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            <button className=' common-btn' >Login</button>
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
           </div>
        );
    }
}

export default TopHeader;