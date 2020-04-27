import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

 class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="white" fixed="top" expand="lg" >
                    <Navbar.Collapse className="justify-content-left">
                        <Nav>
                            <img src={require('../images/logo.png')} className="logo-image" alt=" Gito.me" fluid />
                        </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-center">
                        <Nav.Link  className="link-style text-center"  href="/">About Us</Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
export default Header;