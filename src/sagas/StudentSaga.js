import { call, put} from 'redux-saga/effects'
import { StudentManagementService } from '../services';
import {StudentActions} from '../actions';

export function* getListStudents() {
    try {
        const data = yield call(StudentManagementService.getListStudents);
        yield put(StudentActions.getListStudentsSuccess(data));
    } catch (err){
        yield put(StudentActions.getListStudentsFail())
    }
}

