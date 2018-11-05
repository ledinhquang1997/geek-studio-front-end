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

        const userInfo = yield JSON.parse(data.userinfo);
   
        yield cookies.remove(VariableConstants.TOKEN, { path: "/" });
        yield cookies.remove(VariableConstants.LOGIN_INFO, { path: "/" });

        yield cookies.save(VariableConstants.TOKEN, data.authorization, { path: "/"});       
        yield cookies.save(VariableConstants.LOGIN_INFO, userInfo, { path: "/"});        

        yield console.log(data);
        
        yield put(LoginActions.loginSuccess(data.authorization));
    } catch (err) {
        yield put(LoginActions.loginFail("Username not exist or wrong password"))
    }
} 

export function* goToHomePage(action) {
    try {
        yield forwardToNewPathname("/");
    } catch (err) {

    }
}

