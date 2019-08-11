import React, { Component } from "react";
import axios from "axios";

export default class Html extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    axios.get("http://localhost:3003/zhihu").then(res => {
      this.setState(() => {
        return res.data;
      });
    });
  }
  render() {
    const { stories, top_stories } = this.state;
    return (
      <div>
        {stories &&
          stories.map(item => {
            return (
              <div key={item.id}>
                <p>{item.title}</p>
                {item.images.map((item, index) => {
                  return <img key={index} src={item} alt="lala" />;
                })}
              </div>
            );
          })}
           { top_stories&&
              top_stories.map((item,index)=>{
                return <div key={item.id}>
                    <p>{item.title}</p>
                    <img src={item.image} alt="1"/>
                </div>
              })
          }
      </div>
    );
  }
}