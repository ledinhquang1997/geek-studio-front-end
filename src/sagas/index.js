import { fetchInstructorList } from './InstructorSagas';
import { fetchBestSellerCourses, fetchTop6CoursesByCategoryId, fetchTopRatingCourse ,getCoursesByCategoryFilterPage, getCourseDetail} from './CourseSagas';
import { takeEvery } from 'redux-saga/effects'
import { InstructorConstants, CourseConstant, CategoryConstants, LoginConstants } from '../constants';
import { fetchAllCategories ,getcurrentCategoryWithTopics} from './CategorySagas';
import { login,goToHomePage } from './LoginSagas';

export default function* rootSaga() {
    yield takeEvery(InstructorConstants.GET_ALL_INSTRUCTORS, fetchInstructorList)
    yield takeEvery(CourseConstant.GET_BEST_SELLER_COURSE, fetchBestSellerCourses)
    yield takeEvery(CategoryConstants.GET_ALL_CATEGORIES, fetchAllCategories)
    yield takeEvery(CourseConstant.GET_TOP_6_COURSES_BY_CATEGORY, fetchTop6CoursesByCategoryId)
    yield takeEvery(CourseConstant.GET_TOP_RATING_COURSE, fetchTopRatingCourse)
    yield takeEvery(LoginConstants.LOGIN,login)
    yield takeEvery(LoginConstants.LOGIN_SUCCESS,goToHomePage)
    yield takeEvery(CategoryConstants.GET_CURRENT_CATEGORY_WITH_TOPICS,getcurrentCategoryWithTopics)
    yield takeEvery(CourseConstant.GET_CURRENT_COURSES_BY_CATEGORY,getCoursesByCategoryFilterPage)
    yield takeEvery(CourseConstant.GET_COURSE_DETAIL,getCourseDetail)
}