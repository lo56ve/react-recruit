import React, { Component } from 'react'
import { Grid, List } from 'antd-mobile'
import './avatar-selector.scss'

class AvatarSelector extends Component {
    constructor (props) {
        super(props)
        super(props)
        this.onSelectAvatar = this.onSelectAvatar.bind(this)
    }

    onSelectAvatar (item) {
        this.props.changeValue('select', item.icon)
        this.props.changeValue('hasAvatar', true)
    }

    render () {
        const avatarData = ['boy', 'bull', 'chick', 'crab', 'girl', 'hedgehog', 'hippopotamus', 'koala', 'lemur', 'man', 'pig', 'tiger', 'whale', 'woman', 'zebra'].map(item => ({
            icon: require(`../img/${item}.png`),
            text: item
        }))

        const gridHeader = this.props.hasAvatar ? (
            <div className="gridHeader">
                已选择的头像是：<img src={this.props.select} alt=""/>
            </div>
        ) : <div className="gridHeader">请选择你的头像：</div>

        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid
                     data={avatarData} columnNum={5}
                     onClick={_el => this.onSelectAvatar(_el)}></Grid>
                </List>
            </div>
        )
    }
}

export default AvatarSelector