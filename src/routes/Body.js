import React, { Component } from "react";
import "../static/css/Body.css";
import {connect} from "react-redux"
import { NavLink, Switch, Route } from "react-router-dom";
import Info from "../routes/lisnInfo/Info";
import Add from "../routes/lisnInfo/add";
import Boss from "../routes/lisnInfo/boss";
import action from "../reducer/action/index"
import Modify from "../routes/lisnInfo/modify"
 
class Body extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="info">
                <ul className="infoUl">
                    <li className="infoList">
                        <NavLink to="/Body/Info" exact>客户列表</NavLink>
                    </li>
                    <li className="infoList">
                        <NavLink to="/Body/add">增加客户</NavLink>
                    </li>
                    <li className="infoList">
                        <NavLink to="/Body/boss">删除客户</NavLink>
                    </li>
                    <li className="infoList">
                        <NavLink to="/Body/modify">修改客户</NavLink>
                    </li>
                </ul>
                <div className="Right">
                    <Switch>
                        <Route path="/Body" exact component={Info}></Route>
                        <Route path="/Body/Info"  component={Info}></Route>
                        <Route path="/Body/add"  component={Add}></Route>
                        <Route path="/Body/boss"  component={Boss}></Route>
                        <Route path="/Body/modify"  component={Modify}></Route>
                    </Switch>
                </div>
            </div>
        )
    }
}
export default connect(store=>({...store.Body}),action.Body)(Body);