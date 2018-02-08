import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import './navbarTop.scss'
import { getCookie } from '../../util/Util'

class NavbarTop extends Component {
    constructor(props){
        super(props)
        this.state = {
            status: 'seeker'
        }
    }

    render() {
        return (
            <div>
                <NavBar mode="dark">
                    {this.state.status === 'seeker' ? 'BOSS' : '求职者'}列表
                </NavBar>
            </div>
        )
    }
}

export default NavbarTop