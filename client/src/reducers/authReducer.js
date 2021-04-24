import { FETCH_USER } from "../actions/types";

const authReducer = function(state=null, action) {
    switch (action.type){
        case FETCH_USER:
            console.log(action.payload)
            return action.payload || false
        default: 
            return state;
    }
}
export default authReducer;