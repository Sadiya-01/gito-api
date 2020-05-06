import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';

 class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="white"  expand="lg" >
                    <Navbar.Collapse className="justify-content-left">
                        <Nav>
                            <img src={require('../images/logo1.png')} className="logo-image" alt=" Gito.me" fluid />
                            <Nav.Link  className="link-style "  Link to="" target="_blank">About Us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                       
                </Navbar>
            </div>
        )
    }
}
export default Header;