import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Home from "../ftf/home";
// import Search from "../ftf/search";
import Shou from "../xia/shou.jsx";
import Detail from "../detail";
import Xiazai from "../login-xiazai";
import Shouye from "../login-shouye";
import Search from '../login-search'
import Common from '../ftf/common'
import Signin from "../Login";
import Zc from '../Zc'
import Ditail from "../ftf/ditail";

export default class Html extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/signin" component={Signin} />
          <Route path="/zc" component={Zc} />
          <Route path="/ditail" component={Ditail} />
          {/* <Route path="/Dlsy" component={Shouye} /> */}
          <Route path="/detail" component={Detail} />
          <Route path="/search" component={Search} />
          <Route path="/xiazai" component={Xiazai} />
          <Route path="/home11" component={Shou} />
          <Route path="/home10" component={Shouye} />
          <Route path="/home2" component={() => <div>121</div>} />
          <Redirect exact from="/" to="/home/tuijian"/>

          {/* <Redirect to="/home3" /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}
