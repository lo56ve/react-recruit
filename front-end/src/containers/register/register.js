import React, { Component } from 'react'
import { List, InputItem, WingBlank, Button, WhiteSpace, Radio } from 'antd-mobile'
import Logo from '../../components/logo/logo'
import './register.scss'

const RadioItem = Radio.RadioItem

class Register extends Component {
    constructor (props) {
        super(props)
        this.state = {
            type: 'seeker'
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
                        <InputItem placeholder="">用户名</InputItem>
                        <InputItem placeholder="">密码</InputItem>
                        <InputItem placeholder="">确认密码</InputItem>
                    </List>
                    <WhiteSpace size="lg"/>
                    <div className="register-role">选择角色</div>
                    <WhiteSpace size="lg"/>
                    <List>
                        <RadioItem onChange={() => this.setState({type: 'seeker'})} checked={this.state.type === 'seeker'}>求职者</RadioItem>
                        <RadioItem onChange={() => this.setState({type: 'boss'})} checked={this.state.type === 'boss'}>BOSS</RadioItem>
                    </List>
                    <WhiteSpace />
                    <Button type="primary">注册</Button>
                </WingBlank>
            </div>
        )
    }
}

export default Register