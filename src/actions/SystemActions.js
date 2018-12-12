import { VariableConstants } from '../constants'

function changeFilterToBestSeller() {
    return { type: VariableConstants.BEST_SELLER }
}

function changeFilterToRating() {
    return { type: VariableConstants.RATING }
}

function alertOn(type,content) {
    return { type: VariableConstants.ALERT_ON,payload:{type:type, content:content} }
}

function alertOff() {
    return { type: VariableConstants.ALERT_OFF}
}

function startLoading(content) {
    return { type: VariableConstants.START_LOADING, payload:{content:content}}
}

function stopLoading() {
    return { type: VariableConstants.STOP_LOADING}
}

function changeCartNumber(number) {
    return { type: VariableConstants.CHANGE_CART_NUMBER, payload:{number:number}}
}

export const SystemActions = {
    changeFilterToBestSeller,changeFilterToRating,alertOn,alertOff,
    startLoading,stopLoading,changeCartNumber
}