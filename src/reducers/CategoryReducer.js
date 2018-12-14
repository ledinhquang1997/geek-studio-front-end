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

const categoryToDisplayInitialState = {categoryName:'', categoryId:''};
export const categorytToDisplay = (state = categoryToDisplayInitialState, action) => {
    switch (action.type) {
        case CategoryConstants.CHANGE_CATEGORY_TO_DIPLAY:
            return {...state,categoryName:action.payload.categoryName, categoryId:action.payload.categoryId}
        default:
            return state
    }
}

const currentCategoryWithTopicsInitialState = {}
export const currentCategoryWithTopics = (state = currentCategoryWithTopicsInitialState, action) => {
    switch (action.type) {
        case CategoryConstants.GET_CURRENT_CATEGORY_WITH_TOPICS:
            return state
        case CategoryConstants.GET_CURRENT_CATEGORY_WITH_TOPICS_SUCCESS:
            return { ...state, data: action.payload }
        case CategoryConstants.GET_CURRENT_CATEGORY_WITH_TOPICS_FAILED:
            return { ...state, msg: "Category " + action.payload + " not found" }
        default:
            return state
    }
}