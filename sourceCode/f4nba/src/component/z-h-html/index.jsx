import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Shouye from "../login-shouye/index.jsx";
import Search from "../login-search/index.jsx";
import Xiazai from "../login-xiazai/index.jsx";
import Detail from "../detail/index.jsx";
import Shou from "../xia/shou.jsx";
export default class Html extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Route path="/" exact component={Shouye} /> */}
          <Route path="/home" component={Shouye} />
          <Route path="/detail" component={Detail} />
          <Route path="/search" component={Search} />
          <Route path="/xiazai" component={Xiazai} />
          <Route path="/home1" component={Shou} />
          <Route path="/home2" component={() => <div>121</div>} />
          <Redirect to="/home" />
        </BrowserRouter>
      </div>
    );
  }
}
