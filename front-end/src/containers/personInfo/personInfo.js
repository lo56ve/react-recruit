import React, { Component } from 'react'
import { NavBar, WhiteSpace, InputItem, TextareaItem, List, Button } from 'antd-mobile'
import './personInfo.scss'

import AvatarSelector from '../../components/avatar-selector/avatar-selector'

class PersonInfo extends Component {
    constructor (props) {
        super(props)
        this.state = {
            status: 'boss'
        }
    }

    render () {
        const info = this.state.status === 'seeker' ? (
            <List>
                <InputItem placeholder="">求职岗位</InputItem>
                <TextareaItem
                    placeholder="" 
                    title="个人简介"
                    autoHeight
                    rows={5}></TextareaItem>
            </List>
        ) : (
            <List>
                <InputItem placeholder="">招聘职位</InputItem>
                <InputItem placeholder="">公司名称</InputItem>
                <InputItem placeholder="">薪资范围</InputItem>
                <TextareaItem
                    placeholder="" 
                    title="职位要求"
                    autoHeight
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