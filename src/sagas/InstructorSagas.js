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

