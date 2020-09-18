import React, { Component } from 'react'

import NavigationBar from './navigationBar'
import Logo from '../../assets/logo.png'

import '../../css/body/home/header.css'

class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="bgimg">     
                    <div className="image-wrapper">
                        <div className="content">
                            <NavigationBar />
                            {/* <h1>SKYLINE <br/> WRW</h1> */}
                            <img className="header-logo" src={Logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default header
