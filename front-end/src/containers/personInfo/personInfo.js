import React, { Component } from 'react'
import { NavBar, WhiteSpace, InputItem, TextareaItem, List, Button, Toast } from 'antd-mobile'
import './personInfo.scss'
import AvatarSelector from '../../components/avatar-selector/avatar-selector'
import { getCookie } from '../../util/Util'
import axios from 'axios'

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
            demand: '',
            select: '',
            hasAvatar: false
        }
        this.changeValue = this.changeValue.bind(this)
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
        this.setState({
            [type]: value
        })
    }

    saveInfo() {
        let {jobInvite, company, jobpay, demand, jobWant, intro, status, select} = this.state
        let param = status === 'boss' ? {jobInvite, company, jobpay, demand} : {jobWant, intro}
        let token = window.sessionStorage.getItem('token')
        console.log(param)
        axios.post('/user/setPersonInfo', param, {headers: {Authorization: `Bearer ${token}`}})
            .then(res => {
                if(res.status === 200 && res.data.status === '1') {
                    Toast.success(res.data.msg, 1)
                    let path = {
                        pathname: '/home/personList',
                        state: {status: this.state.status}
                    }
                    this.props.history.replace(path)
                } else {
                    Toast.fail(res.data.msg, 1)
                    setTimeout(() => {
                        this.props.history.replace('/login')
                    }, 1000)
                }
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
                    onChange={value => {this.changeValue('intro', value)}}
                    rows={5}></TextareaItem>
            </List>
        ) : (
            <List>
                <InputItem placeholder="" value={this.state.jobInvite} onChange={value => {this.changeValue('jobInvite', value)}}>招聘职位</InputItem>
                <InputItem placeholder="" value={this.state.company} onChange={value => {this.changeValue('company', value)}}>公司名称</InputItem>
                <InputItem placeholder="" value={this.state.jobpay} onChange={value => {this.changeValue('jobpay', value)}}>薪资范围</InputItem>
                <TextareaItem
                    placeholder="" 
                    title="职位要求"
                    autoHeight
                    value={this.state.demand}
                    onChange={value => {this.changeValue('demand', value)}}
                    rows={5}></TextareaItem>
            </List>
        )

        return (
            <div>
                <NavBar mode="dark">
                    {this.state.status === 'seeker' ? '求职者' : 'boss'}完善信息
                </NavBar>
                <AvatarSelector changeValue={this.changeValue} select={this.state.select} hasAvatar={this.state.hasAvatar}/>
                <WhiteSpace />
                {info}
                <WhiteSpace size="lg"/>
                <Button type="primary" onClick={() => {this.saveInfo()}}>保存</Button>
            </div>
        )
    }
}

export default PersonInfo