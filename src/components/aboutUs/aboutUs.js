import React, { Component } from 'react'

import NavigationBar from '../home/navigationBar'

import '../../css/body/aboutUs/aboutUs.css'

class aboutUs extends Component {
    render() {
        return (
            <div className="about-us">
                <div className="bgimg">     
                    <div className="image-wrapper">
                        <div className="content">
                            <NavigationBar />
                            <h1>ABOUT US</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default aboutUs
