import { LoginConstants } from '../constants';

function login(username, password) {
    return { type: LoginConstants.LOGIN, payload: { username: username, password: password } };
}

function loginSuccess() {
    return { type: LoginConstants.LOGIN_SUCCESS };
}
function loginFail() {
    return { type: LoginConstants.LOGIN_FAILURE };
}

function getCurrentUser() {
    return { type: LoginConstants.GET_CURRENT_USER };
}

function getCurrentUserSuccess(user) {
    return { type: LoginConstants.GET_CURRENT_USER_SUCCESS, payload: user };
}
function getCurrentUserFailed(user) {
    return { type: LoginConstants.GET_CURRENT_USER_SUCCESS};
}
export const LoginActions = {
    login, loginSuccess, loginFail
}
