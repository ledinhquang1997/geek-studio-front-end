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
