import React, { Component } from "react";
import { connect } from "react-redux";
import action from "../../reducer/action"

class Add extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <ul>
                <li>
                    工号:   <input type="text" autofocus="autofocus" ref="USER_ID" />
                    &nbsp;&nbsp;
                   姓名:<input type="text" ref="USER_NAME" />
                    &nbsp;&nbsp;
                   年龄:<input type="text" ref="USER_AGE" />
                    &nbsp;&nbsp;
                    <button onClick={this.submit}>添加客户</button>
                </li>
            </ul>
        )
    }
    submit = ev => {
        let { USER_ID, USER_NAME, USER_AGE } = this.refs,
            { add, history, data } = this.props;
        let reg = /^([0-1]|[1-9][0-9]*)$/g,
            Age=/^(1[89]|[2-5][0-9]|60)$/g,
            Nam = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;

        if (!reg.test(USER_ID.value)){
             alert(" 亲^_^~ 工号必须为数字哦!")
            return
        } 
        if(!Nam.test(USER_NAME.value)){
            alert(" 亲^_^~ 姓名必须填写哦!")
            return;
        }
         if( !Age.test(USER_AGE.value)){
            alert(" 亲^_^~ 年龄必须为数字或者不能为空哦!")
            return
        }
        if (USER_ID.value.length === 0) {
            return;
        } else if (USER_NAME.value.length === 0) {
            return;
        }
        let A = data.some((item) => item.id === USER_ID.value);
        if (A) {
            alert(` 亲^_^  工号为${USER_ID.value} 已有 请重新填写！`)
            history.push("/Body/add");
            USER_ID.value = "";
        } else {
            add({
                id: USER_ID.value,
                name: USER_NAME.value,
                age: USER_AGE.value
            });
            USER_AGE.value = USER_ID = USER_NAME = "";
            history.push("/Body/info")
        }
    }
}
export default connect(store => ({ ...store.Body }), action.Body)(Add)