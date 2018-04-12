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
        this.changeValue = this.changeValue.bind(this)
    }

    changeValue(type, value){
        this.setState({
            [type]: value
        })
    }

    componentDidMount(){
        let user = getCookie('user')
        this.changeValue('status', user.position)
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