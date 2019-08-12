import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "../ftf/home";
import Search from "../ftf/search";
import Signin from "../Login";
import Zc from '../Zc'
import Ditail from "../ftf/ditail";

export default class Html extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/signin" component={Signin} />
          <Route path="/zc" component={Zc} />
          <Route path="/ditail" component={Ditail} />
          <Redirect exact from="/" to="/home/tuijian" />
        </Switch>
      </BrowserRouter>
    );
  }
}
