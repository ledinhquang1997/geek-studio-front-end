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

const currentCoursesByCategoryInitialState = { filter: VariableConstants.POPULAR, courses: [], msg: "", currentPage: 1 }
export const currentCoursesByCategory = (state = currentCoursesByCategoryInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY:
            return { ...state, filter: action.payload.filter, currentPage: action.payload.page }
        case CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY_SUCCESS:
            return { ...state, courses: action.payload }
        case CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY_FAILED:
            return { ...state, courses: [], msg: action.payload }
        default:
            return state
    }
}

const courseDetailInitialState = { err: "", data: {} }
export const courseDetail = (state = courseDetailInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_COURSE_DETAIL:
            return state;
        case CourseConstant.GET_COURSE_DETAIL_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                err: ""
            }
        case CourseConstant.GET_COURSE_DETAIL_SUCCESS_FAIL:
            return {
                ...state,
                data: {},
                err: action.payload.error
            }
        default:
            return state
    }
}

const currentCoursesByInstructorInitialState = { courses: [], err: false, currentPage: 1 }
export const currentCoursesByInstructor = (state = currentCoursesByInstructorInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_COURSES_BY_INSTRUCTOR:
            return { ...state, currentPage: action.payload.page }
        case CourseConstant.GET_COURSES_BY_INSTRUCTOR_SUCCESS:
            return { ...state, courses: action.payload.data, err: false }
        case CourseConstant.GET_COURSES_BY_INSTRUCTOR_FAIL:
            return { ...state, courses: [], err: true }
        default:
            return { ...state, courses: [], err: false }
    }
}

const CoursesOfStudentInitialState = { data: [], err: false }
export const CoursesOfStudent = (state = CoursesOfStudentInitialState, action) => {
    switch (action.type) {
        case CourseConstant.GET_COURSES_OF_STUDENT:
            return state
        case CourseConstant.GET_COURSES_OF_STUDENT_SUCCESS:
            return { ...state, data: action.payload.data }
        case CourseConstant.GET_COURSES_OF_STUDENT_FAIL:
            return { ...state, data: [],err:true }
        default:
            return state
    }
}