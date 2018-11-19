import { call, put } from 'redux-saga/effects'
import { LoginServices } from '../services';
import { LoginActions } from '../actions';
import cookies from 'react-cookies';
import { VariableConstants } from '../constants';

export function* login(action) {
    try {
        yield console.log(action);

        const data = yield call(LoginServices.login, action.payload.username, action.payload.password);

   
        yield cookies.remove(VariableConstants.TOKEN, { path: "/" });
        yield cookies.remove(VariableConstants.USERNAME, { path: "/" });
        yield cookies.remove(VariableConstants.ROLES, { path: "/" });
        yield cookies.remove(VariableConstants.EMAIL, { path: "/" });
        yield cookies.remove(VariableConstants.IMAGE, { path: "/" });

        yield cookies.save(VariableConstants.TOKEN, data.token, { path: "/"});       
        yield cookies.save(VariableConstants.USERNAME, data.userinfo.username, { path: "/"});        
        yield cookies.save(VariableConstants.ROLES, data.userinfo.roles, { path: "/"});   
        yield cookies.save(VariableConstants.EMAIL, data.userinfo.email, { path: "/"});        
        yield cookies.save(VariableConstants.IMAGE, data.userinfo.image, { path: "/"});        
             
        yield put(LoginActions.loginSuccess(data.authorization));
    } catch (err) {
        yield put(LoginActions.loginFail("Username not exist or wrong password"))
    }
} 

export function* goToHomePage(action) {
    try {
        // yield forwardToNewPathname("/");
    } catch (err) {

    }
}

export function* register(action) {
    try {
        yield console.log(action);

        const data = yield call(LoginServices.registerNewStudentAccount, action.payload.newAccount)        
        yield put(LoginActions.registerNewStudentAccountSuccess(data));
    } catch (err) {
        yield put(LoginActions.registerNewStudentAccountFail("Can not register new account. Please try again."))
    }
} 


