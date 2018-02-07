import React, { Component } from 'react'
import { List, InputItem, WingBlank, Button, WhiteSpace } from 'antd-mobile'
import './login.scss'
import Logo from '../../components/logo/logo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginIn } from '../../redux/user.redux'
import axios from 'axios'

class Login extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: '',
            pwd: ''
        }
    }

    handleLoginIn() {
        this.props.loginIn(this.state)
        axios.get('/article', res => {
            console.log(res)
        })
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
                    <Button type="primary" onClick={() => this.handleLoginIn()}>登录</Button>
                    <WhiteSpace />
                    <Button>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

// const mapStateToProps = state => {info: state}
const mapStateToProps = (state) => {
    return {info: state}
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginIn: bindActionCreators(loginIn, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)