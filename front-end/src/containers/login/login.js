import React, { Component } from 'react'
import { List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile'
import './login.scss'
import Logo from '../../components/logo/logo'
import { connect } from 'react-redux'
import { login } from '../../redux/user.redux'

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            pwd: ''
        }
    }

    jump() {
        this.props.history.push('/register')
    }

    changeName(value) {
        this.setState({
            name: value
        })
    }

    changePwd(value){
        this.setState({
            pwd: value
        })
    }

    render () {
        return (
            <div>
                <div className="logo">
                    <Logo />
                </div>
                <WingBlank>
                    <List>
                        <InputItem placeholder="" value={this.state.name} onChange={value => this.changeName(value)}>用户</InputItem>
                        <InputItem placeholder="" type="password" value={this.state.pwd} onChange={value => this.changePwd(value)}>密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary">登录</Button>
                    <WhiteSpace />
                    <Button onClick={() => this.jump()}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => state.user,
    {login}
)(Login)