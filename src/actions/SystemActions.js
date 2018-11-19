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

export const SystemActions = {
    changeFilterToBestSeller,changeFilterToRating,alertOn,alertOff
}