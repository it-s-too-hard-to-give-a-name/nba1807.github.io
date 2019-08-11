import React, { Component } from 'react'
import './index.scss';
import api from'../api/index.js'

export default class Zc extends Component {
    constructor(){
        super()
        this.state = {
            username:'',
            password:'',
            yzm:''
        }
    }
    onHandleChange=({target})=>{
        this.setState({
            [target.name]: target.name==='checkBox'?target.checked:target.value
        })
        // console.log(target.value)
    }
    onSubmit=()=>{
        // api.LOGIN('http://localhost:3003/login',this.state).then(res=>{
        //     console.log(res)
        //     const {phone,password,checkbox} = res;
        //     if (!phone===this.state.phone) {
        //         alert('请输入正确格式的手机号')
        //         return false
        //     }
        //     if (!password===this.state.password) {
        //         alert('请输入正确的密码')
        //         return false
        //     }
        //     if (!(checkbox === this.state.checkBox)) {
        //         alert("请记住登录状态");
        //         return false;
        //       } else {
        //         alert("登陆成功！");
        //       }
        // })
    }
    render() {
        return (
            <div className='zcbox'>
                <div className='header-zc'>
                <img src="https://static.zhihu.com/heifetz/assets/orgSignBackground.f8c3132e.png" alt="1"/>
                </div>
                <div className='zc-body'>
                        <div className='zc-logo'>
                            <img src="https://static.zhihu.com/heifetz/assets/orgLogo.856a3683.png" alt="1"/>
                        </div>
                        <div className='zc-form-box'>
                            <form>
                                <label className='zc-label'>
                                    <input type="text" 
                                    value={this.state.username} 
                                    name='username' 
                                    placeholder='请输入用户名'
                                    onChange={this.onHandleChange}
                                    />
                                </label>
                                <label className='zc-label'>
                                    <input type="password" 
                                    value={this.state.password} 
                                    name='password' 
                                    onChange={this.onHandleChange}
                                    placeholder='请输入密码'
                                    />
                                </label>
                                <label className='zc-label'>
                                    <input type="text"  className='yzm'
                                    value={this.state.yzm} 
                                    name='yzm' 
                                    onChange={this.onHandleChange}
                                    placeholder='请输入验证码'
                                    />
                                    <img className='yzming' src="https://www.zhihu.com/api/v4/org/captcha?r=1558605065003&type=register&lang=en" alt="1"/>
                                </label>
                                <label className='zc-label'>
                                    <button 
                                    type='button'
                                    onClick={this.onSubmit}>
                                        注册
                                    </button>
                                </label>
                            </form>
                        </div>
                        <div className='zc-box-a'>
                            <a href="https://www.zhihu.com/terms/privacy">点击「注册」按钮，
                            即代表你同意</a>
                            <a href="https://www.zhihu.com/org_service_agreement">《知乎机构帐号服务协议》《隐私政策》</a>
                            </div>
                </div>
                <div>
                < img alt='詹姆斯'src={`${process.env.PUBLIC_URL}/img/1565522364644.jpg`} style={{width:'100%',height:'100%'}}/>
                </div>
                <div>
                    <img src="https://static.zhihu.com/heifetz/assets/orgStar.fa3d98bf.png" alt="1"/>
                < img alt='詹姆斯'src={`${process.env.PUBLIC_URL}/img/1565522591976.jpg`} style={{width:'100%',height:'100%'}}/>
                </div>
            </div>
        )
    }
}
