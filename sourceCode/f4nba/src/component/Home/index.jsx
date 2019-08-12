import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Login from '../Login'
// import Html from '../'
import Zc from '../Zc'
export default class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/' exact component={Login}/>
                <Route path='/zc' component={Zc}/>
            </BrowserRouter>
        )
    }
}
