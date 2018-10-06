import { VariableConstants } from '../constants';
import cookies from 'react-cookies';

// Apply new URL without reloading
export function applyNewPathname(pathname) {
  let url = window.location.href;
  let lastSlashIndex = url.lastIndexOf("/");
  url = url.substring(0, lastSlashIndex) + "/" + pathname;
  window.history.pushState({}, "", url);
}

// redirect to new pathname
export function forwardToNewPathname(pathname) {
  window.location.pathname = pathname;
}

// localhost:3000/management/user
// => user
export function getURLLastPart() {
  return window.location.href.substring(window.location.href.lastIndexOf("/") + 1, window.location.href.length);
}

// Check if s match a filter
export function includes(string, filter) {
  if (!filter) {
    return true;
  }
  if (string) {
    return string.toString().toUpperCase().includes(filter.toUpperCase());
  }
  return false;
}

// check if array contain an item
export function contain(array, item) {
  if (!array || array.length === 0) {
    return false;
  }
  return (array.findIndex(i => i === item) > -1);
}

export function containRole(item, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].authority === item) {
      return true;
    }
  }
  return false;
}

// dd/MM/yyyy
export function dateToString(date) {
  if (!date) {
    return "UNSET";
  }
  if (typeof date.getMonth !== 'function') {
    date = new Date(date);
  }
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

// dd/MM/yyyy
export function dateToLongString(date) {
  if (!date) {
    return "UNSET";
  }
  if (typeof date.getMonth !== 'function') {
    date = new Date(date);
  }
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " - " + date.getHours() + ":" + date.getMinutes();
}

export function convertNullToEmpty(anyThing) {
  let object = JSON.parse(JSON.stringify(anyThing));
  for (let key in object) {
    if (!object[key]) {
      object[key] = "";
    }
  }
  return object;
}

export function isNormalCharactersOnly(text) {
  return text.match(/^[a-zA-Z0-9\-_\s]{0,}$/g);
}

// Cookies info example
// "principal": {
//   "username": "thien",
//   "password": "$2a$10$pW50vmFNSE48HXPa3fx5PuvX96pNiB3wzOU0m6YFhhDSranFPgewy",
//   "fullName": "Thien Tran",
//   "email": "tcthien@tma.com.vn",
//   "roles": [
//       "ADMIN",
//       "USER"
//   ],
//   "credentialsNonExpired": true,
//   "accountNonExpired": true,
//   "accountNonLocked": true,
//   "authorities": [
//       {
//           "authority": "ADMIN"
//       },
//       {
//           "authority": "USER"
//       }
//   ],
//   "enabled": true
// }
export function getCookies() {
  const cookie = {
    token: cookies.load(VariableConstants.TOKEN),
    info: cookies.load(VariableConstants.LOGIN_INFO),
  }
  cookie.roles = cookie.info ? cookie.info.roles : undefined;
  return cookie;
}

// Delete login cookies
export function deleteCookies() {
  cookies.remove(VariableConstants.TOKEN, { path: "/" });
  cookies.remove(VariableConstants.LOGIN_INFO, { path: "/" });
}

export function logout() {
  deleteCookies();
  forwardToNewPathname("/login");
}

