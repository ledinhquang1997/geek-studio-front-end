import { call, put } from 'redux-saga/effects'
import { CourseServices } from '../services';
import { CourseActions } from '../actions';

export function* fetchBestSellerCourses() {
    try {
        const data = yield call(CourseServices.getBestSellerCourses);
        yield put(CourseActions.getBestSellerSuccess(data));
    } catch (err) {
        yield put(CourseActions.getBestSellerFailed())
    }
}
export function* fetchTopRatingCourse() {
    try {
        const data = yield call(CourseServices.getTopRatingCourses);
        yield put(CourseActions.getTopRatingSucess(data));
    } catch (err) {
        yield put(CourseActions.getTopRatingFailed())
    }
}

export function* fetchTop6CoursesByCategoryId(action) {
    try {
        const id = yield action.payload;
        const data = yield call(CourseServices.getTop6CoursesByCategoryId, id);
        yield put(CourseActions.getTop6CoursesByCategorySuccess(data));
    } catch (err) {
        yield put(CourseActions.getTop6CoursesByCategoryFailed())
    }
}

export function* getCoursesByCategoryFilterPage(action) {
    try {
        const category = yield action.payload.category;
        const filter = yield action.payload.filter;
        const page = yield action.payload.page;

        const data = yield call(CourseServices.getCoursesByCategoryFilterPage, category, filter, page);

        yield put(CourseActions.getCurrentCoursesByCategorySuccess(data));
    } catch (err) {
        yield put(CourseActions.getCurrentCoursesByCategoryFailed("Error"))
    }
}

export function* getCourseDetail(action) {
    try {

        const courseId = yield action.payload.courseId;

        const data = yield call(CourseServices.getCourseDetail, courseId);

        yield put(CourseActions.getCourseDetailSuccess(data));
    } catch (err) {
        yield put(CourseActions.getCourseDetailFail("Can not get course detail"))
    }
}

export function* getCoursesByInstructor(action) {
    try {
        const username = yield action.payload.username;
        const page = yield action.payload.page;

        const data = yield call(CourseServices.getCoursesByInstructor, username,page);

        yield put(CourseActions.getCoursesByInstructorSuccess(data));
    } catch (err) {
        yield put(CourseActions.getCoursesByInstructorFail())
    }
}

export function* getCoursesOfStudent(action) {
    try {
        const username = yield action.payload.username;

        const data = yield call(CourseServices.getCoursesOfStudent, username);

        yield put(CourseActions.getCoursesOfStudentSuccess(data));
    } catch (err) {
        yield put(CourseActions.getCoursesOfStudentFail())
    }
}

export function* getUserCourseLessons(action) {
    try {
        const courseId = yield action.payload.courseId;

        const data = yield call(CourseServices.getUserCourseLessons, courseId);

        yield put(CourseActions.getUserCourseLessonsSuccess(data));
    } catch (err) {
        yield put(CourseActions.getUserCourseLessonsFail())
    }
}
