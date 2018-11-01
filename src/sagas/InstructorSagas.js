import { call, put} from 'redux-saga/effects'
import { InstructorServices } from '../services';
import {InstructorActions} from '../actions';

export function* fetchInstructorList() {
    try {
        const data = yield call(InstructorServices.getAllInstructors);
        yield put(InstructorActions.fetchAllInstructorSuccess(data.instructors));
    } catch (err){
        yield put(InstructorActions.fetchAllInstructorsFailed())
    }
}

export function* getInstructorDetail(action) {
    try {
        const username = yield action.payload.username;
        const data = yield call(InstructorServices.getInstructorDetail,username);
        yield put(InstructorActions.getInstructorDetailSuccess(data));
    } catch (err){
        yield put(InstructorActions.getInstructorDetailFailed())
    }
}
