
import './headercomp.css'
import rocketPng from '../../assets/launch.png'

import React, { Component } from 'react'

export default class HeaderComp extends Component {
    render() {
        return (
            <div>
                <img src={rocketPng} alt="rocket gif" className='hero-image' />
                <h1 className='hero-title'>Space News</h1>
            </div>
        )
    }
}


