import { fetchInstructorList, getInstructorDetail } from './InstructorSagas';
import {
    fetchBestSellerCourses, fetchTop6CoursesByCategoryId, fetchTopRatingCourse,
    getCoursesByCategoryFilterPage, getCourseDetail,
    getCoursesByInstructor, getCoursesOfStudent, getUserCourseLessons,
    getStudentCourseSectionListByLesson,getSectionDetail,changeProgress,
    getStudentCourseSectionListByLessonSuccess,getCourseListManagement,
    getLessonListManagement,getLessonManagement,getSectionListManagement,
    getSectionUpdate
} from './CourseSagas';
import { takeEvery } from 'redux-saga/effects'
import { InstructorConstants, CourseConstant, CategoryConstants, LoginConstants, StudentConstants } from '../constants';
import { fetchAllCategories, getcurrentCategoryWithTopics } from './CategorySagas';
import { login,register} from './LoginSagas';
import {getListStudents} from './StudentSaga';

export default function* rootSaga() {
    yield takeEvery(InstructorConstants.GET_ALL_INSTRUCTORS, fetchInstructorList)
    yield takeEvery(CourseConstant.GET_BEST_SELLER_COURSE, fetchBestSellerCourses)
    yield takeEvery(CategoryConstants.GET_ALL_CATEGORIES, fetchAllCategories)
    yield takeEvery(CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY, fetchTop6CoursesByCategoryId)
    yield takeEvery(CourseConstant.GET_TOP_RATING_COURSE, fetchTopRatingCourse)
    yield takeEvery(LoginConstants.LOGIN, login)
    yield takeEvery(CategoryConstants.GET_CURRENT_CATEGORY_WITH_TOPICS, getcurrentCategoryWithTopics)
    yield takeEvery(CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY, getCoursesByCategoryFilterPage)
    yield takeEvery(CourseConstant.GET_COURSE_DETAIL, getCourseDetail)
    yield takeEvery(InstructorConstants.GET_INSTRUCTOR_DETAIL, getInstructorDetail)
    yield takeEvery(CourseConstant.GET_COURSES_BY_INSTRUCTOR, getCoursesByInstructor)
    yield takeEvery(CourseConstant.GET_COURSES_OF_STUDENT, getCoursesOfStudent)
    yield takeEvery(CourseConstant.GET_USER_COURSE_LESSONS, getUserCourseLessons)
    yield takeEvery(CourseConstant.GET_STUDENT_COURSE_SECTION_LIST,getStudentCourseSectionListByLesson)
    yield takeEvery(CourseConstant.GET_SECTION_DETAIL,getSectionDetail)
    yield takeEvery(CourseConstant.CHANGE_CURRENT_LESSON,changeProgress)
    yield takeEvery(CourseConstant.CHANGE_CURRENT_SECTION,changeProgress)
    yield takeEvery(CourseConstant.GET_STUDENT_COURSE_SECTION_LIST_SUCCESS,getStudentCourseSectionListByLessonSuccess)
    yield takeEvery(StudentConstants.GET_LIST_STUDENTS,getListStudents)
    yield takeEvery(LoginConstants.REGISTER_NEW_STUDENT_ACCOUNT,register)
    yield takeEvery(CourseConstant.GET_COURSE_LIST_MANAGEMENT,getCourseListManagement)
    yield takeEvery(CourseConstant.GET_LESSON_LIST_MANAGEMENT,getLessonListManagement)
    yield takeEvery(CourseConstant.GET_LESSON_MANAGEMENT,getLessonManagement)
    yield takeEvery(CourseConstant.GET_SECTION_LIST_MANAGEMENT,getSectionListManagement)
    yield takeEvery(CourseConstant.GET_SECTION_UPDATE,getSectionUpdate)
}