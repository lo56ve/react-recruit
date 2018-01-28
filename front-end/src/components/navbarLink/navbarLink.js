import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import './navbarLink.scss'

const Item = TabBar.Item

class NavbarLink extends Component {
    constructor(props){
        super(props)
        this.state = {
            navData: [
                {title: 'BOSS列表', value: 'boss'},
                {title: '消息列表', value: 'msg'},
                {title: '个人中心', value: 'user'}
            ],
            selectTab: 'home'
        }
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
                                icon = {{uri: require(`./img/${item.value}.png`)}}
                                selectedIcon = {{uri: require(`./img/${item.value}-active.png`)}}
                                selected = {this.state.selectTab === item.value}
                                onPress = {() => {
                                    this.setState({
                                        selectTab: item.value
                                    })
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

export default NavbarLink