import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import './user.scss'

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {name: 'dongzai', avatar: 'boy', 'job': 'python后端', 'intro': '精通'}
        }
    }

    render() {
        return (
            <div>
                <div className="avatar-wrap">
                    <img src={require(`../img/${this.state.userInfo.avatar}.png`)} alt=""/>
                    <div>{this.state.userInfo.name}</div>
                </div>
                <div className="intro-title">简介</div>
                <div className="intro-body">
                    <div>岗位：{this.state.userInfo.job}</div>
                    <div>简介：{this.state.userInfo.intro}</div>
                </div>
                <Button>退出登录</Button>
            </div>
        )
    }
}

export default User