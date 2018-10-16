import { CourseConstant, VariableConstants } from '../constants';

const highlightCoursesInitialState = { filter: "", courses: [] }
export const highlightCourses = (state = highlightCoursesInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_BEST_SELLER_COURSE:
            return state
        case CourseConstant.GET_BEST_SELLER_COURSE_SUCCESS:
            return { ...state, filter: VariableConstants.BEST_SELLER, courses: action.payload }
        case CourseConstant.GET_BEST_SELLER_COURSE_FAILED:
            return state
        case CourseConstant.GET_TOP_RATING_COURSE:
            return state
        case CourseConstant.GET_TOP_RATING_COURSE_SUCCESS:
            return { ...state, filter: VariableConstants.RATING, courses: action.payload }
        case CourseConstant.GET_TOP_RATING_COURSE_FAILED:
            return state
        default:
            return state
    }
}

const top6CoursesByCategoryInitialState = []
export const top6CoursesByCategory = (state = top6CoursesByCategoryInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY:
            return state
        case CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY_SUCCESS:
            return action.payload
        case CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY_FAILED:
            return state
        default:
            return state
    }
}

const currentCoursesByCategoryInitialState = { filter: VariableConstants.POPULAR, courses: [], msg:"",currentPage:1}
export const currentCoursesByCategory = (state = currentCoursesByCategoryInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY:
            return { ...state, filter: action.payload.filter, currentPage:action.payload.page}
        case CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY_SUCCESS:
            return { ...state, courses: action.payload }
        case CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY_FAILED:
            return {...state,courses:[],msg:action.payload}
        default:
            return state
    }
}