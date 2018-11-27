import { LoginConstants, VariableConstants } from "../constants";

const loginInitialState = { msg: "", loggedin: false, isLoading: false }
export const login = (state = loginInitialState, action) => {
    switch (action.type) {
        case LoginConstants.LOGIN:
            return { ...state, isLoading: true }
        case LoginConstants.LOGIN_SUCCESS:
            return { ...state, loggedin: true, isLoading: false }
        case LoginConstants.LOGIN_FAILURE:
            return { ...state, msg: action.payload.msg, isLoading: false }
        case VariableConstants.ALERT_OFF:
            return { ...state, msg: "" }
        case LoginConstants.LOG_OUT:
            return { ...state, loggedin:false }
        default:
            return state
    }
}

const registerInitialState = { successful: false, msg: "", isLoading: false }
export const register = (state = registerInitialState, action) => {
    switch (action.type) {
        case LoginConstants.REGISTER_NEW_STUDENT_ACCOUNT:
            return { ...state, isLoading: true }
        case LoginConstants.REGISTER_NEW_STUDENT_ACCOUNT_SUCCESS:
            return { ...state, successful: true, isLoading: false }
        case LoginConstants.REGISTER_NEW_STUDENT_ACCOUNT_FAIL:
            return { ...state, isLoading: false, msg: action.payload.msg }
        case VariableConstants.ALERT_OFF:
            return { ...state, msg: "", successful: false }
        default:
            return state
    }
}