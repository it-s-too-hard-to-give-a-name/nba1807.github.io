import React, { Component } from 'react'
import axios from 'axios'
export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        const { id } = this.props.location.state
        axios.get('http://localhost:3003/ditail', { params: { id } }).then(res => {
            this.setState(() => {
                return res.data
            })
        })
    }
    render() {
        console.log(this.props)
        //  {/* 详情页 */ }
        return (
            < div style={{ fontSize: '25px' }}>
                <p>详情页</p>
                <div dangerouslySetInnerHTML={{ __html: this.state.body }}></div>
            </div >
        )
    }
}
