import axios from 'axios';
// 登录
const login = (path,data)=>{

    
    return axios.post(path,data).then(res=>{
        if (res.status===200) {
            return res.data
        }else{
            return false
        }
    }).catch(err=>{
        console.log('err',err)
    })
}
export default{
    LOGIN:login
}