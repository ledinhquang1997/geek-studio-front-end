import { LoginConstants } from "../constants";

const loginInitialState = {}
export const login = (state = loginInitialState, action) => {
    switch (action.type) {
        case LoginConstants.LOGIN:
            return state
        default:
            return state
    }
}

const currentUserInitialState = { user: {} }
const currentUser = (state = currentUserInitialState, action) => {
    switch (action.type) {
        case LoginConstants.GET_CURRENT_USER:
            return state
        case LoginConstants.GET_CURRENT_USER_SUCCESS:
            return action.payload
        case LoginConstants.GET_CURRENT_USER_FAILURE:
            return state;
        default:
            return state
    }
}