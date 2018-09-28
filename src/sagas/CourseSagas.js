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

