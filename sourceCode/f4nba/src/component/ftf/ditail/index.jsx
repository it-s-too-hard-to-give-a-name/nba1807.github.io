import React, { Component } from "react";
import axios from "axios";
import "./index.scss";

export default class Ditail extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const id = this.props.history.location.state.id;
    axios.get("http://localhost:8088/ditail", { params: { id } }).then(res => {
      this.setState(() => {
        return res.data;
      });
    });
  }
  render() {
    return (
      <div className="ditail-box">
        <p className="title">详情页</p>
        <div
          dangerouslySetInnerHTML={{
            __html: this.state.body
          }}
        />
      </div>
    );
  }
}
