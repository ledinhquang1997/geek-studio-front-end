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
    return { type: CourseConstant.GET_COURSE_DETAIL_SUCCESS, payload: { data: data } }
}

function getCourseDetailFail(error) {
    return { type: CourseConstant.GET_COURSE_DETAIL_SUCCESS, payload: { error: error } }
}
function getCoursesByInstructor(username, page) {
    return { type: CourseConstant.GET_COURSES_BY_INSTRUCTOR, payload: { username: username, page: page } }
}
function getCoursesByInstructorSuccess(data) {
    return { type: CourseConstant.GET_COURSES_BY_INSTRUCTOR_SUCCESS, payload: { data: data } }
}
function getCoursesByInstructorFail() {
    return { type: CourseConstant.GET_COURSES_BY_INSTRUCTOR_FAIL }
}

function getCoursesOfStudent(username) {
    return { type: CourseConstant.GET_COURSES_OF_STUDENT, payload: { username: username } }
}

function getCoursesOfStudentSuccess(data) {
    return { type: CourseConstant.GET_COURSES_OF_STUDENT_SUCCESS, payload: { data: data } }
}

function getCoursesOfStudentFail() {
    return { type: CourseConstant.GET_COURSES_OF_STUDENT_FAIL }
}


function getUserCourseLessons(courseId) {
    return { type: CourseConstant.GET_USER_COURSE_LESSONS, payload: { courseId: courseId } }
}

function getUserCourseLessonsSuccess(data) {
    return { type: CourseConstant.GET_USER_COURSE_LESSONS_SUCCESS, payload: { data: data } }
}

function getUserCourseLessonsFail() {
    return { type: CourseConstant.GET_USER_COURSE_LESSONS_FAIL }
}

function getStudentCourseSectionListByLesson(lessonId) {
    return { type: CourseConstant.GET_STUDENT_COURSE_SECTION_LIST, payload: { lessonId: lessonId } }
}

function getStudentCourseSectionListByLessonSuccess(data, urlLesson) {
    return { type: CourseConstant.GET_STUDENT_COURSE_SECTION_LIST_SUCCESS, payload: { data: data, urlLesson: urlLesson } }
}
function getStudentCourseSectionListByLessonFail() {
    return { type: CourseConstant.GET_STUDENT_COURSE_SECTION_LIST_FAIL }
}

function getSectionDetail(sectionId) {
    return { type: CourseConstant.GET_SECTION_DETAIL, payload: { sectionId: sectionId } }
}


function getSectionDetailSuccess(data) {
    return { type: CourseConstant.GET_SECTION_DETAIL_SUCCESS, payload: { data: data } }
}


function getSectionDetailFail() {
    return { type: CourseConstant.GET_SECTION_DETAIL_FAIL }
}

function changeCurrentSection(sectionId) {
    return { type: CourseConstant.CHANGE_CURRENT_SECTION, payload: { sectionId: sectionId } }
}

function changeCurrentLesson(lessonId) {
    return { type: CourseConstant.CHANGE_CURRENT_LESSON, payload: { lessonId: lessonId } }
}

function getCourseListManagement() {
    return { type: CourseConstant.GET_COURSE_LIST_MANAGEMENT }
}

function getCourseListManagementSuccess(data) {
    return { type: CourseConstant.GET_COURSE_LIST_MANAGEMENT_SUCCESS, payload: { data: data } }
}

function getCourseListManagementFail(data) {
    return { type: CourseConstant.GET_COURSE_LIST_MANAGEMENT_FAIL }
}

function getLessonListManagement(courseId) {
    return { type: CourseConstant.GET_LESSON_LIST_MANAGEMENT, payload: { courseId: courseId } }
}

function getLessonListManagementSuccess(data) {
    return { type: CourseConstant.GET_LESSON_LIST_MANAGEMENT_SUCCESS, payload: { data: data } }
}

function getLessonListManagementFail(err) {
    return { type: CourseConstant.GET_LESSON_LIST_MANAGEMENT_FAIL, payload: { err: err } }
}


function getLessonManagement(lessonId) {
    return { type: CourseConstant.GET_LESSON_MANAGEMENT, payload: { lessonId: lessonId } }
}

function getLessonManagementSuccess(data) {
    return { type: CourseConstant.GET_LESSON_MANAGEMENT_SUCCESS, payload: { data: data } }
}


function getLessonManagementFail(err) {
    return { type: CourseConstant.GET_LESSON_MANAGEMENT_FAIL, payload: { err: err } }
}


function getSectionListManagement(lessonId) {
    return { type: CourseConstant.GET_SECTION_LIST_MANAGEMENT, payload: { lessonId: lessonId } }
}

function getSectionListManagementSuccess(data) {
    return { type: CourseConstant.GET_SECTION_LIST_MANAGEMENT_SUCCESS, payload: { data: data } }
}

function getSectionListManagementFail(err) {
    return { type: CourseConstant.GET_SECTION_LIST_MANAGEMENT_FAIL, payload: { err: err } }
}


function getSectionUpdate(sectionId){
    return { type: CourseConstant.GET_SECTION_UPDATE, payload: { sectionId: sectionId }}
}
function getSectionUpdateSuccess(data){
    return { type: CourseConstant.GET_SECTION_UPDATE_SUCCESS, payload: { data: data }}
}
function getSectionUpdateFail(){
    return { type: CourseConstant.GET_SECTION_UPDATE_FAIL}
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
    getCoursesByInstructorFail,

    getCoursesOfStudent,
    getCoursesOfStudentSuccess,
    getCoursesOfStudentFail,

    getUserCourseLessons,
    getUserCourseLessonsSuccess,
    getUserCourseLessonsFail,

    getStudentCourseSectionListByLesson,
    getStudentCourseSectionListByLessonSuccess,
    getStudentCourseSectionListByLessonFail,

    getSectionDetail,
    getSectionDetailSuccess,
    getSectionDetailFail,

    changeCurrentSection,
    changeCurrentLesson,

    getCourseListManagement,
    getCourseListManagementSuccess,
    getCourseListManagementFail,

    getLessonListManagement,
    getLessonListManagementSuccess,
    getLessonListManagementFail,

    getLessonManagement,
    getLessonManagementSuccess,
    getLessonManagementFail,

    getSectionListManagement,
    getSectionListManagementSuccess,
    getSectionListManagementFail,

    getSectionUpdate,
    getSectionUpdateSuccess,
    getSectionUpdateFail
}