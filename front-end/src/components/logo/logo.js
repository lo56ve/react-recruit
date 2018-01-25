import React, { Component } from 'react'
import imgSrc from './logo.png'
import './logo.scss'

class Logo extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render () {
        return (
            <div className="logo-wrap">
                <img src={imgSrc} alt=""/>
            </div>
        )
    }
}

export default Logo