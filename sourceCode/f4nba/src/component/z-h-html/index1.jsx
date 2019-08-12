import React, { Component } from 'react'
import {Route,BrowserRouter} from 'react-router-dom'
import Dlsy from './index'
export default class Dlsy extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route path='/Dlsy' component={Dlsy} />
            </BrowserRouter>
        )
    }
}
