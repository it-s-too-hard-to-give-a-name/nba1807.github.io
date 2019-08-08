import React, { Component } from 'react'
import './index.scss';
export default class Html extends Component {
    render() {
        return (
            <div>
                <div className='login-header'>
                    <i className='iconfont icon-close'></i>
                    <p className='login-header-p1'>登录知乎</p>
                    <p className='login-header-p2'>发现更多可信赖的解答</p>
                </div>
                <div>
                    <form>
                        <label>
                            <input type="text" placeholder='输入手机号'/>
                        </label>
                        <label>
                            <input type="text" placeholder='请输入六位验证码'/>
                        </label>
                        <p>未注册手机验证后会自动登录</p>
                        <p>注册即同意《知乎协议》《隐秘保护指引》</p>
                        <label>
                            <button>登录</button>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}
