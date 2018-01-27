import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import './persionList.scss'

import PersonCard from '../../components/personCard/personCard'

class PersionList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            persons: [
                {name: '阮一峰', avatar: '../components/img/girl.png', job: 'python开发', description: '精通'},
                {name: '张鑫旭', avatar: '../components/img/boy.png', job: 'java开发', description: '掌握'},
                {name: '廖雪峰', avatar: '../components/img/man.png', job: 'web开发', description: '了解'}
            ],
            jobs: [
                {name: '阿里hr', avatar: '../components/img/girl.png', job: 'python开发', company: '阿里', money: '11k', demand: '熟练python'},
                {name: '腾讯hr', avatar: '../components/img/girl.png', job: 'java开发', company: '腾讯', money: '12k', demand: '熟练java'},
                {name: '百度hr', avatar: '../components/img/girl.png', job: 'web开发', company: '百度', money: '13k', demand: '熟练web'}
            ],
            status: 'seeker'
        }
    }

    render () {
        const cards = this.state.status === 'boss' ? 
                        this.state.persons.map((item, index) => (
                            <PersonCard persons = {item} key = {index}/>
                        )) : 
                        this.state.jobs.map((item, index) => (
                            <PersonCard jobs = {item} key = {index}/>
                        ))
        return (
            <div>
                <NavBar mode="dark">
                    {this.state.status === 'seeker' ? 'BOSS' : '求职者'}列表
                </NavBar>
                {cards}
            </div>
        )
    }
}

export default PersionList