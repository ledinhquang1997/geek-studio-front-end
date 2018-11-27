import { LoginConstants } from '../constants';

function login(username, password) {
    return { type: LoginConstants.LOGIN, payload: { username: username, password: password } };
}

function loginSuccess(accessToken) {
    return { type: LoginConstants.LOGIN_SUCCESS, payload:accessToken };
}
function loginFail(msg) {
    return { type: LoginConstants.LOGIN_FAILURE, payload:{msg:msg}};
}
function registerNewStudentAccount(newAccount) {
    return { type: LoginConstants.REGISTER_NEW_STUDENT_ACCOUNT, payload:{newAccount:newAccount}};
}

function registerNewStudentAccountSuccess(createdAccount) {
    return { type: LoginConstants.REGISTER_NEW_STUDENT_ACCOUNT_SUCCESS, payload:{createdAccount:createdAccount}};
}

function registerNewStudentAccountFail(msg) {
    return { type: LoginConstants.REGISTER_NEW_STUDENT_ACCOUNT_FAIL, payload:{msg:msg}};
}

function logout() {
    return { type: LoginConstants.LOG_OUT};
}

export const LoginActions = {
    login, loginSuccess, loginFail,
    registerNewStudentAccount,registerNewStudentAccountSuccess,registerNewStudentAccountFail,
    logout
}
