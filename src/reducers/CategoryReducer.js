import { CategoryConstants } from '../constants';

const categoriesListInitialState = []
export const listCategories = (state = categoriesListInitialState, action) => {
    switch (action.type) {
        case CategoryConstants.GET_ALL_CATEGORIES:
            return state
        case CategoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            return action.payload
        case CategoryConstants.GET_ALL_CATEGORIES_FAILED:
            return state
        default:
            return state
    }
}

const categoryToDisplayInitialState = "";
export const categorytToDisplay = (state = categoryToDisplayInitialState, action) => {
    switch (action.type) {
        case CategoryConstants.CHANGE_CATEGORY_TO_DIPLAY:
            return action.payload
        default:
            return state
    }
}