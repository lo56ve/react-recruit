import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../containers/login/login'
import Register from '../containers/register/register'
import PersonInfo from '../containers/personInfo/personInfo'
import Home from '../containers/home/home'

class Routes extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/personInfo" component={PersonInfo} />
                        <Route path="/home" component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default Routes