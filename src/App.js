import React, { Component } from 'react';
import HomePage from './components/Home/HomePage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={HomePage} />
          </Switch>
          {/* <HomePage/> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
