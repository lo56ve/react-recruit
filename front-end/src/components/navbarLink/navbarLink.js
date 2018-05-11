import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import './navbarLink.scss'
import { getCookie } from '../../util/Util'
import {withRouter} from 'react-router-dom'

const Item = TabBar.Item

class NavbarLink extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectTab: '',
            status: '',
            navData: [
                {title: `boss列表`, value: 'personList', name: 'boss'},
                {title: '消息列表', value: 'msg', name: 'msg'},
                {title: '个人中心', value: 'user', name: 'user'}
            ]
        }
        this.changeState = this.changeState.bind(this)
    }

    changeState(type, value) {
        this.setState({
            [type]: value
        })
    }

    componentDidMount() {
        let user = getCookie('user')
        this.changeState('status', user.position)
        let newNavData = [...this.state.navData]
        if (user.position === 'boss') {
            newNavData.splice(0, 1, {title: `求职者列表`, value: 'personList', name: 'job'})
        }
        this.changeState('navData', newNavData)
        this.changeState('selectTab', 'personList')
    }

    render() {
        return (
            <div>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white">
                    {
                        this.state.navData.map((item, index) => (
                            <Item
                                title={item.title}
                                key={index}
                                icon = {{uri: require(`./img/${item.name}.png`)}}
                                selectedIcon = {{uri: require(`./img/${item.name}-active.png`)}}
                                selected = {this.state.selectTab === item.value}
                                onPress = {() => {
                                    this.setState({
                                        selectTab: item.value
                                    })
                                    this.props.history.replace(`/home/${item.value}`)
                                }}
                            >
                            </Item>
                        ))
                    }
                </TabBar>
            </div>
        )
    }
}

export default withRouter(NavbarLink)
