import React, { Component } from 'react'
import {Nav, Navbar} from 'react-bootstrap'

import '../../css/body/home/navigationBar.css'

class navigationBar extends Component {
    constructor(props){
        super(props)
        this.state={
            navState: "state1 my-navbar",
            isNavbarCollapsed: true
        }
    }

    componentDidMount = () => {
        document.addEventListener("scroll", () => {
            if(window.pageYOffset>300){
                document.getElementById('my-navbar').style.position="fixed"
                this.setState({
                    navState:"state2 my-navbar"
                })
            }
            else{
                document.getElementById('my-navbar').style.position="relative"
                this.setState({
                    navState:"state1 my-navbar"
                })
            }
        })
    }

    _onNavbarToggleClick = () => {
        this.setState({
            isNavbarCollapsed: !this.state.isNavbarCollapsed
        })
     }
     _getNavbarToggleIcon() {
        return this.state.isNavbarCollapsed ? (
            <i className="fas fa-bars toggle-icon"></i>
        ) : (
            <i className="fas fa-times toggle-icon"></i>
        );
    }
    render() {
        return (
            <Navbar id="my-navbar" className={this.state.navState} expand="lg">
                <Navbar.Brand href="/">WE ARE WIRELESS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" children={this._getNavbarToggleIcon()} onClick={this._onNavbarToggleClick}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about-us">About Us</Nav.Link>
                    <Nav.Link href="/customer-reviews">Customer Reviews</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default navigationBar
