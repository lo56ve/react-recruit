import React, { Component } from 'react'
import { TabBar } from 'antd-mobile'
import './home.scss'

const Item = TabBar.Item

class Home extends Component {
    constructor(props){
        super(props)
    }

    render() {
        <div>
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white">
                <Item
                    title="BOSS列表"
                    key="person"
                    icon={
                        <div style={{
                            width: '22px',
                            height: '22px'
                        }}></div>
                    }>
                </Item>
            </TabBar>
        </div>
    }
}