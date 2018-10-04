import { call, put} from 'redux-saga/effects'
import { LoginServices } from '../services';
import {LoginActions} from '../actions';

export function* login(action) {
    try {
        yield console.log(action);
        
         const data = yield call(LoginServices.login,action.payload.username,action.payload.password);
         yield console.log(data);
         
        // yield put(InstructorActions.fetchAllInstructorSuccess(data.instructors));
    } catch (err){
        // yield put(InstructorActions.fetchAllInstructorsFailed())
    }
}

