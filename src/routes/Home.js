import React,{Component} from "react";
import Axios from "axios";

export default class Body extends Component{
    constructor(){
        super()
    }
    // componentWillMount(){
    //     Axios.get("/getList").then(function(response){
    //           console.log(response)
    //     })
    // }
    render(){
        return(
            <div>首页</div>
        )
    }
}