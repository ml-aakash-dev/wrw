import React, { Component } from 'react'

import Header from './home/header'
import OurNumbers from './home/ourNumbers'

class body extends Component {
    render() {
        return (
            <div>
                <Header />

                <OurNumbers />
            </div>
        )
    }
}

export default body
