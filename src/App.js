import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Common/Login';
import ClientSide from './components/ClientSide/ClientSide';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={ClientSide}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
