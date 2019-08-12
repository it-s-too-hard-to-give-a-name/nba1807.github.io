import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './index.scss'
export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                {
                    id: 1,
                    title: "华为正式发布鸿蒙",
                    text: "全场景分布式系统"
                },
                {
                    id: 2,
                    title: "上海堡垒",
                    text: "上映后口碑崩盘？"
                },
                {
                    id: 3,
                    title: "杨幂魏大勋恋情？",
                    text: "男方发文否认"
                },
                {
                    id: 4,
                    title: "RNG 2:1 击败 iG",
                    text: "电竞春晚 RNG 胜出"
                },
                {
                    id: 5,
                    title: "荣耀智慧屏发布",
                    text: "首款搭载鸿蒙系统"
                },
                {
                    id: 6,
                    title: "中餐厅第三季",
                    text: "黄晓明店长能力引质疑"
                },
                {
                    id: 7,
                    title: "中国新说唱第二季",
                    text: "最新八强出炉"
                },
                {
                    id: 8,
                    title: "方舟编译器是什么",
                    text: "如何一句话讲清？"
                }
            ]
        }
    }
    render() {
        const { list } = this.state;
        console.log(list)
        return (
            <div>
                <div className='zh-search-h'>
                    <NavLink to='/home'>
                        <div className='zh-logo'>
                            <img src={process.env.PUBLIC_URL + '/image/logo.png'} />
                        </div>
                    </NavLink>
                    <NavLink to='/search'>
                        <div className='zh-sea'>
                            <img src={process.env.PUBLIC_URL + '/image/search1.png'} style={{ width: '25px', height: '25px' }} />
                            <input placeholder='搜索知乎内容' />
                        </div>
                    </NavLink>
                    <NavLink to='/home10'>
                        <div className='zh-sea-del'>
                            <span>取消</span>
                        </div>
                    </NavLink>
                </div>
                <div className='zh-search-main'>
                    <div className='z-s-m-s'>
                        <p className='z-s-m-s-title'>热搜</p>
                        <div className='z-s-m-s-list'>
                            {
                                list.map((item, index) => {
                                    return <div key={index} className='z-s-m-s-item'>
                                        <p className='z-s-m-s-i-index'>{item.id}</p>
                                        <div className='z-s-m-s-i-text'>
                                            <p>{item.title}</p>
                                            <p className='z-s-m-s-itemtext'>{item.text}</p>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className='z-s-m-h'>
                        <p className='z-s-m-h-title'>搜索历史</p>
                    </div>
                </div>
            </div>
        )
    }
}
