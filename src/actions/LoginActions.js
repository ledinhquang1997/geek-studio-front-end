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
export const LoginActions = {
    login, loginSuccess, loginFail
}
