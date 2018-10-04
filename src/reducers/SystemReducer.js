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