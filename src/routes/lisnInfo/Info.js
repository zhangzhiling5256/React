import React, { Component } from "react";
import {connect} from "react-redux"
 class Info extends Component {
    constructor() {
        super()
    }
    render() {
        let {data}=this.props;
        return (
            <ul>
                {data.map((item,index)=>{
                    let {id, name,age}=item;
                    return (<li key={index}>
                        工号:<span>{id}</span>
                        &nbsp;&nbsp;
                       姓名:<span>{name}</span>
                        &nbsp;&nbsp;
                       年龄:<span>{age}</span>
                        &nbsp;&nbsp;
                   </li>) 
                })}
            </ul>
        )
    }
}
export default connect(store=>({...store.Body}))(Info)