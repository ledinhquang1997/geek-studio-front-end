import { VariableConstants } from '../constants';

const filterInitialState = VariableConstants.BEST_SELLER
export const filter = (state = filterInitialState, action) => {
    switch (action.type) {
        case VariableConstants.BEST_SELLER:
            return VariableConstants.BEST_SELLER
        case VariableConstants.RATING:
            return VariableConstants.RATING
        default:
            return state
    }
}

const alertInitialState = { status: false, type: "", content: "" }
export const alert = (state = alertInitialState, action) => {
    switch (action.type) {
        case VariableConstants.ALERT_ON:
            return { ...state, status: true, type: action.payload.type, content: action.payload.content }
        case VariableConstants.ALERT_OFF:
            return { ...state, status: false }
        default:
            return state
    }
}

const loadingInitialState = { status: false, content: "" }
export const loading = (state = loadingInitialState, action) => {
    switch (action.type) {
        case VariableConstants.START_LOADING:
            return { ...state, status: true, content: action.payload.content }
        case VariableConstants.STOP_LOADING:
            return { state, status: false }
        default:
            return state
    }
}

const cartInitialState = { quantity: 0 }
export const cart = (state = cartInitialState, action) => {
    switch (action.type) {
        case VariableConstants.CHANGE_CART_NUMBER:
            return { ...state, quantity: action.payload.number }
        default:
            return state
    }
}