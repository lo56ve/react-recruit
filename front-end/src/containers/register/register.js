import React, { Component } from 'react'
import { List, InputItem, WingBlank, Button, WhiteSpace, Radio, Toast } from 'antd-mobile'
import Logo from '../../components/logo/logo'
import './register.scss'
// import store from '../../store/store'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loginIn } from '../../redux/user.redux'
import axios from 'axios'

const RadioItem = Radio.RadioItem

class Register extends Component {
    constructor (props) {
        super(props)
        this.state = {
            position: 'seeker',
            name: '',
            pwd: '',
            comfirmPwd: ''
        }
    }

    changeValue(type, value) {
        this.setState({
            [type]: value
        })
    }

    handleRegister() {
        const checkNoEmpty = (value) => value.length > 0
        let {position, name, pwd, comfirmPwd} = this.state
        if (!checkNoEmpty(name)) {
            Toast.info('名字不能为空', 1)
        }
        if (!checkNoEmpty(pwd)) {
            Toast.info('密码不能为空', 1)
        }
        if (comfirmPwd !== pwd) {
            Toast.info('两次密码输入不一致', 1)
        }
        if (checkNoEmpty(name) && checkNoEmpty(pwd) && (pwd === comfirmPwd)) {
            axios.post('/user/register', {position, name, pwd})
                .then(res => {
                    if (res.data.status === '1') {
                        // 将token存储到sessionStorage
                        window.sessionStorage.setItem('token', res.data.token)
                        Toast.success(res.data.msg, 1)
                        this.props.history.replace('/personInfo')
                    } else {
                        Toast.fail(res.data.msg, 2)
                    }
                })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Logo />
                </div>
                <WingBlank>
                    <List>
                        <InputItem placeholder="" value={this.state.name} onChange={(value) => {this.changeValue('name', value)}}>用户名</InputItem>
                        <InputItem type="password" placeholder="" value={this.state.pwd} onChange={(value) => {this.changeValue('pwd', value)}}>密码</InputItem>
                        <InputItem type="password" placeholder="" value={this.state.comfirmPwd} onChange={(value) => {this.changeValue('comfirmPwd', value)}}>确认密码</InputItem>
                    </List>
                    <WhiteSpace size="lg"/>
                    <div className="register-role">选择角色</div>
                    <WhiteSpace size="lg"/>
                    <List>
                        <RadioItem onClick={() => {this.changeValue('position', 'seeker')}} checked={this.state.position === 'seeker'}>求职者</RadioItem>
                        <RadioItem onClick={() => {this.changeValue('position', 'boss')}} checked={this.state.position === 'boss'}>BOSS</RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary" onClick={() => {this.handleRegister()}}>注册</Button>
                </WingBlank>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {info: state}
}

const mapDispatchToProps = dispatch =>{
    return {
        onRegister: param => {
            dispatch(loginIn(param))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)