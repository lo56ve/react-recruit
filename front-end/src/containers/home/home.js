import React, { Component } from 'react'
import './home.scss'

import NavbarLink from '../../components/navbarLink/navbarLink'
import PersonList from '../../components/personList/personList'

class Home extends Component {

    render() {
        return (
            <div className="home-wrap">
                <PersonList />
                <div className="nav-bar-link">
                    <NavbarLink />
                </div>
            </div>
        )
    }
}

export default Home