import * as TYPES from "../action-Types";
let  Body={
    add(payload){
        return{
           type:TYPES.Body_add,
           payload
        }
    },
    remover(ID,NAME){
        return{
          type:TYPES.Body_remove,
           ID,
           NAME
        }
    }
}
export default Body;