import React, { Component } from 'react';
import HomePage from './components/Home/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { PrivateRoute } from './components/private-route';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={HomePage} requiredRoles={"ROLE_ADMIN"} />
          </Switch>
          {/* <HomePage/> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
