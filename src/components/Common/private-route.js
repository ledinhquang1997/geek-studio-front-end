
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { deleteCookies, getCookies } from './utilities';

export const PrivateRoute = ({ component: Component, requiredRoles, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated(requiredRoles) ? (
      <Component {...props} />) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)

function isAuthenticated(requiredRoles) {
  //get user 
  let cookies = getCookies();
  if (!cookies.token || !cookies.roles || !cookies.info) {
    deleteCookies();
    return false;
  }
  const { roles } = cookies;
  for (let i = 0; i < roles.length; i++) {
    if (roles[i] === requiredRoles) {
      return true;
    }
  }
  return false;
}


