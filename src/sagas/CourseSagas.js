import { call, put} from 'redux-saga/effects'
import { CourseServices } from '../services';
import {CourseActions} from '../actions';

export function* fetchBestSellerCourses() {
    try {
        const data = yield call(CourseServices.getBestSellerCourses);
        yield put(CourseActions.getBestSellerSuccess(data));
    } catch (err){
        yield put(CourseActions.getBestSellerFailed())
    }
}
export function* fetchTopRatingCourse() {
    try {
        const data = yield call(CourseServices.getTopRatingCourses);
        yield put(CourseActions.getTopRatingSucess(data));
    } catch (err){
        yield put(CourseActions.getTopRatingFailed())
    }
}

export function* fetchTop6CoursesByCategoryId(action) {
    try {
       const id = yield action.payload;
        const data = yield call(CourseServices.getTop6CoursesByCategoryId,id);
        yield put(CourseActions.getTop6CoursesByCategorySuccess(data));
    } catch (err){
        yield put(CourseActions.getTop6CoursesByCategoryFailed())
    }
}
