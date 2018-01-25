import React, { Component } from 'react'
import { List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile'
import './login.scss'
import Logo from '../../components/logo/logo';

class Login extends Component {
    // constructor (props) {
    //     super(props)
    // }

    render () {
        return (
            <div>
                <div className="logo">
                    <Logo />
                </div>
                <WingBlank>
                    <List>
                        <InputItem placeholder="">用户</InputItem>
                        <InputItem placeholder="" type="password">密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary">登录</Button>
                    <WhiteSpace />
                    <Button>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Login