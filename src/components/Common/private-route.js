
import React from "react";
import { Route, Redirect } from "react-router-dom";
import cookies from 'react-cookies';
import { VariableConstants } from "../../constants";

export const PrivateRoute = ({ component: Component, requiredRoles, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated(requiredRoles) ? (
      <Component {...props} />) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }} />
      )
  )} />
)

function isAuthenticated(requiredRoles) {
  //get user 
  // let cookies = getCookies();
  // if (!cookies.roles || !cookies.username) {
  //   deleteCookies();
  //   return false;
  // }
  const roles = cookies.load(VariableConstants.ROLES);
  for (let i = 0; i < roles.length; i++) {
    if (requiredRoles.includes(roles[i])) {
      return true;
    }
  }
  return false;
}


