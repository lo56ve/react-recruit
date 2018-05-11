import React, { Component } from 'react'
import { List, InputItem, WingBlank, Button, WhiteSpace, Toast } from 'antd-mobile'
import './login.scss'
import Logo from '../../components/logo/logo'
// import { bindActionCreators } from 'redux'
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
    
    hangleRegister() {
        this.props.history.replace('/register')
    }

    handleLoginIn() {
        axios.post('/user/login', this.state)
             .then(res => {
                 if (res.data.status === '1') {
                    // 提交redux action
                    this.props.onLoginIn({user: this.state.name, pwd: this.state.pwd, position: res.data.position})
                    // 将token存储到sessionStorage
                    window.sessionStorage.setItem('token', res.data.token)
                    Toast.success(res.data.msg, 1)
                    if (res.data.hasintro) {
                        let path = {
                            pathname: '/home/personList',
                            state: {status: this.props.info.position}
                        }
                        this.props.history.push(path)
                    } else {
                        this.props.history.push('/personInfo')
                    }
                 } else {
                    Toast.fail(res.data.msg, 2)
                 }
             })
    }

    // 改变state的值
    changeValue(type, value) {
        this.setState({
            [type]: value
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
                        <InputItem placeholder="" value={this.state.name} onChange={value => this.changeValue('name', value)}>用户</InputItem>
                        <InputItem placeholder="" type="password" value={this.state.pwd} onChange={value => this.changeValue('pwd', value)}>密码</InputItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary" onClick={() => this.handleLoginIn()}>登录</Button>
                    <WhiteSpace />
                    <Button onClick={() => this.hangleRegister()}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {info: state}
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginIn: param => {
            dispatch(loginIn(param))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)