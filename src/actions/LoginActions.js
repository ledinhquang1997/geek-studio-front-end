import { LoginConstants } from '../constants';

function login(username, password) {
    return { type: LoginConstants.LOGIN, payload: { username: username, password: password } };
}

function loginSuccess(accessToken) {
    return { type: LoginConstants.LOGIN_SUCCESS, payload:accessToken };
}
function loginFail() {
    return { type: LoginConstants.LOGIN_FAILURE };
}
export const LoginActions = {
    login, loginSuccess, loginFail
}
