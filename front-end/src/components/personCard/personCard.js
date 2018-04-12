import React, { Component } from 'react'
import './personCard.scss'

import { WhiteSpace, WingBlank, Card } from 'antd-mobile'

class PersonCard extends Component {

    render () {
        const card = this.props.status === 'boss' ? 
                    (<Card>
                        <Card.Header
                            title = {this.props.persons.name}
                            thumb = 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png'
                            thumbStyle = {{width: '32px', height: '32px'}}
                            extra = {<span>{this.props.persons.job}</span>}/>
                        <Card.Body>
                            <div className="description">{this.props.persons.description}</div>
                        </Card.Body>
                    </Card>) : 
                    (<Card>
                        <Card.Header
                            title = {this.props.jobs.name}
                            thumb = 'https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png'
                            thumbStyle = {{width: '32px', height: '32px'}}
                            extra = {<span>{this.props.jobs.job}</span>}/>
                        <Card.Body>
                            <div className="description">公司：{this.props.jobs.company}</div>
                            <div className="description">要求：{this.props.jobs.demand}</div>
                            <div className="description">薪资：{this.props.jobs.money}</div>
                        </Card.Body>
                    </Card>)

        return (
            <div>
                <WhiteSpace />
                <WingBlank>
                    {card}
                </WingBlank>
            </div>
        )
    }
}

export default PersonCard