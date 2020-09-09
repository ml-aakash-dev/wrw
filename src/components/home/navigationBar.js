import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'

import '../../css/body/home/navigationBar.css'

class navigationBar extends Component {
    render() {
        return (
            <Navbar className="my-navbar" expand="lg">
                <Navbar.Brand href="/">WE ARE WIRELESS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <Nav.Link href="#customer-reviews">Customer Reviews</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default navigationBar
