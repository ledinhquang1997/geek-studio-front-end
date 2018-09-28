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

export const CourseActions = {
    getBestSellerCourses, getBestSellerSuccess, getBestSellerFailed
}