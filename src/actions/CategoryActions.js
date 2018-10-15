import { CategoryConstants } from '../constants'

function getAllCategories() {
    return { type: CategoryConstants.GET_ALL_CATEGORIES }
}

function getAllCategoriesSuccess(categories) {
    return { type: CategoryConstants.GET_ALL_CATEGORIES_SUCCESS, payload: categories }
}

function getAllCategoriesFailed() {
    return { type: CategoryConstants.GET_ALL_CATEGORIES_FAILED }
}
function displayProgramming() {
    return { type: CategoryConstants.PROGRAMMING }
}
function displayBusiness() {
    return { type: CategoryConstants.BUSINESS }
}
function displayEngineering() {
    return { type: CategoryConstants.ENGINEERING }
}

function displayMarketing() {
    return { type: CategoryConstants.MARKETING}
}

function changeDisplayCategory(name){
    return {type:CategoryConstants.CHANGE_CATEGORY_TO_DIPLAY, payload:name}
}

function getCurrentCategoryWithTopics(categoryId){
    return {type:CategoryConstants.GET_CURRENT_CATEGORY_WITH_TOPICS, payload:categoryId}
}

function getCurrentCategoryWithTopicsSuccess(data){
    return {type:CategoryConstants.GET_CURRENT_CATEGORY_WITH_TOPICS_SUCCESS, payload:data}
}

function getCurrentCategoryWithTopicsFailed(categoryId){
    return {type:CategoryConstants.GET_CURRENT_CATEGORY_WITH_TOPICS_FAILED, payload:categoryId}
}

export const CategoryActions = {
    getAllCategories, getAllCategoriesSuccess, getAllCategoriesFailed,
    displayProgramming,displayBusiness,displayEngineering, displayMarketing,changeDisplayCategory,
    getCurrentCategoryWithTopics,getCurrentCategoryWithTopicsSuccess,getCurrentCategoryWithTopicsFailed
}