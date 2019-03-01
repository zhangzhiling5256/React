import React, { Component } from "react";
import * as TYPES from "../action-Types";
export default function Body(state = {
    data: [{
        id: "1",
        name: "张志岭",
        age: "22"
    },
    {
        id: "2",
        name: "张志峰",
        age: "23"
    },
    {
        id: "3",
        name: "张志华",
        age: "28"
    }
        , {
        id: "4",
        name: "张志改",
        age: "27"
    }
        , {
        id: "5",
        name: "连文帅",
        age: "21"
    }
    ]
}, action) {
    state = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case TYPES.Body_add:
            let { payload } = action;
           
           state.data.push(payload);
            break;
        case TYPES.Body_remove:
            let { ID,NAME } = action,
                newData = state.data;
            let cur = newData.filter((item) => item.id !== ID)
            let reson = prompt(`亲 ^_^~ 您确定要删除工号 ${ID} 姓名为 ${NAME} 用户吗？`)
            if (reson) {
                state.data = cur;
            } else if (reson === "") {
                state.data = cur;
            }
            break;
    }
    return state;
}