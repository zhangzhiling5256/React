import React, { Component } from "react";
import "../static/css/header.css";
import { NavLink, Link,withRouter,Route} from "react-router-dom"
import {connect} from "react-redux"
import action from "../reducer/action/index"

 class Nav extends Component {
    render() {
        return (
            <header className="header">
                <div className="box">
                    <h3 className="title">
                    <Link to="/">百度CRM</Link> 
                    </h3>
                    <ul className="ullist">
                        <li className="itemList">
                            <NavLink to="/" exact>首页</NavLink>
                        </li>
                        <li className="itemList">
                            <NavLink to="/Body">客户管理</NavLink>
                        </li>
                        <li className="itemList">
                            <NavLink to="/Plan"  >计划管理</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default connect(state=>({...state.Body}),action.Body)(Nav)