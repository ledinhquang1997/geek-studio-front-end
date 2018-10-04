import { VariableConstants } from '../constants'

function changeFilterToBestSeller() {
    return { type: VariableConstants.BEST_SELLER }
}

function changeFilterToRating() {
    return { type: VariableConstants.RATING }
}

export const SystemActions = {
    changeFilterToBestSeller,changeFilterToRating
}