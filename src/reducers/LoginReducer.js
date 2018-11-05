import { LoginConstants } from "../constants";

const loginInitialState = {msg:"",loggedin:false}
export const login = (state = loginInitialState, action) => {
    switch (action.type) {
        case LoginConstants.LOGIN:
            return state
        case LoginConstants.LOGIN_SUCCESS:
            return {...state,loggedin:true}
        case LoginConstants.LOGIN_FAILURE:
            return {...state,msg:action.payload.msg}
        default:
            return state
    }
}
