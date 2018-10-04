import { CourseConstant } from '../constants'

function getBestSellerCourses() {
    return { type: CourseConstant.GET_BEST_SELLER_COURSE }
}

function getBestSellerSuccess(courses) {
    return { type: CourseConstant.GET_BEST_SELLER_COURSE_SUCCESS, payload: courses }
}

function getBestSellerFailed() {
    return { type: CourseConstant.GET_BEST_SELLER_COURSE_FAILED }
}

function getTop6CoursesByCategory(id) {
    return { type: CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY, payload: id }
}

function getTop6CoursesByCategorySuccess(courses) {
    return { type: CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY_SUCCESS, payload: courses }
}

function getTop6CoursesByCategoryFailed() {
    return { type: CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY_FAILED }
}

function getTopRating() {
    return { type: CourseConstant.GET_TOP_RATING_COURSE }
}

function getTopRatingSucess(courses) {
    return { type: CourseConstant.GET_TOP_RATING_COURSE_SUCCESS, payload: courses }
}

function getTopRatingFailed() {
    return { type: CourseConstant.GET_TOP_RATING_COURSE_FAILED }
}
export const CourseActions = {
    getBestSellerCourses, getBestSellerSuccess, getBestSellerFailed, getTop6CoursesByCategory
    , getTop6CoursesByCategorySuccess, getTop6CoursesByCategoryFailed, getTopRating, getTopRatingSucess, getTopRatingFailed
}