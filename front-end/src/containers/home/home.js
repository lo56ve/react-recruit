import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom' 
import './home.scss'
import { connect } from 'react-redux'

import NavbarLink from '../../components/navbarLink/navbarLink'
import PersonList from '../../components/personList/personList'
import User from '../../components/user/user'
import NavbarTop from '../../components/navbarTop/navbarTop'

class Home extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="home-wrap">
                <NavbarTop />
                <Switch>
                    <Route path={`${this.props.match.path}/personList`} component={PersonList}></Route>
                    <Route path={`${this.props.match.path}/user`} component={User}></Route>
                </Switch>
                <div className="nav-bar-link">
                    <NavbarLink />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {userInfo: state}
}

export default connect(
    mapStateToProps
)(Home)
