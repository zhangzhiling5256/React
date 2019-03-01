import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {HashRouter,Route,Switch,Redirect} from "react-router-dom";
import Nav from "./component/Nav";
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from "./routes/Home";
import Body from "./routes/Body";
import Plan from "./routes/Plan";
import store from "./reducer/index";
import "axios"
ReactDOM.render(
<Provider store={store}>
    <HashRouter>
    <div>
    <Route  path="/" component={Nav}></Route>
    <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/Body" component={Body}></Route>
        <Route path="/Plan" component={Plan}></Route>
        <Redirect to="/?lx=unsfse"/>
    </Switch> 
    </div>
</HashRouter>
</Provider>
, document.getElementById('root'));
