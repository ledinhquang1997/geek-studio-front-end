import { call, put} from 'redux-saga/effects'
import { StudentManagementService } from '../services';
import {StudentManagementActions} from '../actions';

export function* getListStudents() {
    try {
        const data = yield call(StudentManagementService.getListStudents);
        yield put(StudentManagementActions.getListStudentsSuccess(data));
    } catch (err){
        yield put(StudentManagementActions.getListStudentsFail())
    }
}

