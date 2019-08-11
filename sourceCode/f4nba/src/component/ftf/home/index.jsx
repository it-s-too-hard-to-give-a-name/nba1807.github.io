import React, { Component } from "react";
import "./index.scss";
import { NavLink, Route } from "react-router-dom";
import Common from "../common";

const homeData = [
  {
    id: 1,
    to: "/tuijian",
    text: "推荐"
  },
  {
    id: 2,
    to: "/shenghuo",
    text: "生活"
  },
  {
    id: 3,
    to: "/jiaoyu",
    text: "教育"
  },
  {
    id: 4,
    to: "/yule",
    text: "娱乐"
  },
  {
    id: 5,
    to: "/qiche",
    text: "汽车"
  },
  {
    id: 6,
    to: "/jinrong",
    text: "金融"
  },
  {
    id: 7,
    to: "/zhichang",
    text: "职场"
  },
  {
    id: 8,
    to: "/keji",
    text: "科技"
  },
  {
    id: 9,
    to: "/tiyu",
    text: "体育"
  }
];

export default class Home extends Component {
  render() {
    const { match } = this.props;
    return (
      <div className="home">
        <div className="home-header">
          <ul className="flex flex-bt">
            <li className="logo">
              <NavLink to="/home">知乎</NavLink>
            </li>
            <li className="search">
              <NavLink to="/search">🔍搜索</NavLink>
            </li>
            <li className="signin">
              <NavLink to="/signin">注册或登录</NavLink>
            </li>
          </ul>
        </div>

        <div className="home-nav">
          <ul className="home-navbox flex">
            {homeData.map(item => {
              return (
                <li key={item.id} className="h-n-item">
                  <NavLink
                    to={match.url + item.to}
                    activeClassName="h-n-item-active"
                  >
                    {item.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="home-content">
          <Route path={`${match.url}/:id`} component={Common} />
        </div>
      </div>
    );
  }
}
