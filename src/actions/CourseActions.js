import { CourseConstant } from '../constants'
//BEST SELLER
function getBestSellerCourses() {
    return { type: CourseConstant.GET_BEST_SELLER_COURSE }
}

function getBestSellerSuccess(courses) {
    return { type: CourseConstant.GET_BEST_SELLER_COURSE_SUCCESS, payload: courses }
}

function getBestSellerFailed() {
    return { type: CourseConstant.GET_BEST_SELLER_COURSE_FAILED }
}

//HIGHLIGHT COURSES FOR HOME PAGE
function getTop6CoursesByCategory(id) {
    return { type: CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY, payload: id }
}

function getTop6CoursesByCategorySuccess(courses) {
    return { type: CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY_SUCCESS, payload: courses }
}

function getTop6CoursesByCategoryFailed() {
    return { type: CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY_FAILED }
}
//RATING COURSES
function getTopRating() {
    return { type: CourseConstant.GET_TOP_RATING_COURSE }
}

function getTopRatingSucess(courses) {
    return { type: CourseConstant.GET_TOP_RATING_COURSE_SUCCESS, payload: courses }
}

function getTopRatingFailed() {
    return { type: CourseConstant.GET_TOP_RATING_COURSE_FAILED }
}
// COURSES FOR CATEGORY-COURSE PAGE
function getCurrentCoursesByCategory(category, filter, page) {
    const data = {
        category: category,
        filter: filter,
        page: page
    }
    return {
        type: CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY,
        payload: data
    }
}

function getCurrentCoursesByCategorySuccess(data) {
    return {
        type: CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY_SUCCESS,
        payload: data
    }
}

function getCurrentCoursesByCategoryFailed(msg) {
    return {
        type: CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY_FAILED,
        payload: msg
    }
}

function getCourseDetail(courseId) {
    return { type: CourseConstant.GET_COURSE_DETAIL, payload: { courseId: courseId } }
}

function getCourseDetailSuccess(data) {
    return { type: CourseConstant.GET_COURSE_DETAIL_SUCCESS, payload: { data:data} }
}

function getCourseDetailFail(error) {
    return { type: CourseConstant.GET_COURSE_DETAIL_SUCCESS, payload: {error:error} }
}
function getCoursesByInstructor(username,page){
    return {type:CourseConstant.GET_COURSES_BY_INSTRUCTOR,payload:{username:username,page:page}}
}
function getCoursesByInstructorSuccess(data){
    return {type:CourseConstant.GET_COURSES_BY_INSTRUCTOR_SUCCESS,payload:{data:data}}
}
function getCoursesByInstructorFail(){
    return {type:CourseConstant.GET_COURSES_BY_INSTRUCTOR_FAIL}
}
export const CourseActions = {
    getBestSellerCourses,
    getBestSellerSuccess,
    getBestSellerFailed,

    getTop6CoursesByCategory,
    getTop6CoursesByCategorySuccess,
    getTop6CoursesByCategoryFailed,

    getTopRating,
    getTopRatingSucess,
    getTopRatingFailed,

    getCurrentCoursesByCategorySuccess,
    getCurrentCoursesByCategory,
    getCurrentCoursesByCategoryFailed,

    getCourseDetail,
    getCourseDetailSuccess,
    getCourseDetailFail,

    getCoursesByInstructor,
    getCoursesByInstructorSuccess,
    getCoursesByInstructorFail
}