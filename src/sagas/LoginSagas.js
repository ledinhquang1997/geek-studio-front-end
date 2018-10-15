import { call, put } from 'redux-saga/effects'
import { LoginServices } from '../services';
import { LoginActions } from '../actions';
import cookies from 'react-cookies';
import { VariableConstants } from '../constants';
import { forwardToNewPathname } from '../components/Common/utilities';

export function* login(action) {
    try {
        yield console.log(action);

        const data = yield call(LoginServices.login, action.payload.username, action.payload.password);
        yield cookies.remove(VariableConstants.TOKEN, { path: "/" });
        yield cookies.remove(VariableConstants.LOGIN_INFO, { path: "/" });
        yield cookies.save(VariableConstants.TOKEN, data.authorization, { path: "/"});       

        const currentUser = yield call(LoginServices.getCurrentUser,action.payload.username);
        yield cookies.save(VariableConstants.LOGIN_INFO, currentUser, { path: "/"});        
        yield put(LoginActions.loginSuccess(data.authorization));
    } catch (err) {
        yield put(LoginActions.loginFail())
    }
}

export function* goToHomePage(action) {
    try {
        yield forwardToNewPathname("/");
    } catch (err) {

    }
}

