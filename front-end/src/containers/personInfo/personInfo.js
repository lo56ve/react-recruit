import React, { Component } from 'react'
import { NavBar, WhiteSpace, InputItem, TextareaItem, List, Button, Toast } from 'antd-mobile'
import './personInfo.scss'
import AvatarSelector from '../../components/avatar-selector/avatar-selector'
import { getCookie } from '../../util/Util'

class PersonInfo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            status: '',
            jobWant: '',
            intro: '',
            jobInvite: '',
            company: '',
            jobpay: '',
            demand: ''
        }
    }

    componentDidMount() {
        let user = getCookie('user')
        if (Object.keys(user).length === 0) {
            Toast.info('请重新登录', 1)
            this.props.history.push('/login')
        } else {
            this.setState({
                status: user.position
            })
        }
    }

    // 改变state的值
    changeValue(type, value) {
        // switch(type) {
        //     case 'jobWant':
        //         this.setState({
        //             jobWant: value
        //         })
        //         break
        //     case 'intro':
        //         this.setState({
        //             intro: value
        //         })
        //         break
        //     case 'jobInvite':
        //         this.setState({
        //             jobInvite: value
        //         })
        //         break
        //     case 'company':
        //         this.setState({
        //             company: value
        //         })
        //         break
        //     case 'demand':
        //         this.setState({
        //             demand: value
        //         })
        //         break
        //     case 'jobpay':
        //         this.setState({
        //             jobpay: value
        //         })
        //         break
        //     default:
        //         console.log(type)
        // }
        this.setState({
            [type]: value
        })
    }

    render () {
        const info = this.state.status === 'seeker' ? (
            <List>
                <InputItem placeholder="" value={this.state.jobWant} onChange={value => {this.changeValue('jobWant', value)}}>求职岗位</InputItem>
                <TextareaItem
                    placeholder="" 
                    title="个人简介"
                    autoHeight
                    value={this.state.intro}
                    rows={5}></TextareaItem>
            </List>
        ) : (
            <List>
                <InputItem placeholder="" value={this.state.jobInvite}>招聘职位</InputItem>
                <InputItem placeholder="" value={this.state.company}>公司名称</InputItem>
                <InputItem placeholder="" value={this.state.jobpay}>薪资范围</InputItem>
                <TextareaItem
                    placeholder="" 
                    title="职位要求"
                    autoHeight
                    value={this.state.demand}
                    rows={5}></TextareaItem>
            </List>
        )

        return (
            <div>
                <NavBar mode="dark">
                    {this.state.status === 'seeker' ? '求职者' : 'boss'}完善信息
                </NavBar>
                <AvatarSelector />
                <WhiteSpace />
                {info}
                <WhiteSpace size="lg"/>
                <Button type="primary">保存</Button>
            </div>
        )
    }
}

export default PersonInfo