import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth';

import { Provider } from 'react-redux';
import store from './store';

import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import ClientDetails from './components/clients/ClientDetails';
import AddClient from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import login from './components/auth/login';
import Register from './components/auth/Register';
import Settings from './components/settings/Settings';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
                <Route exact path='/client/add' component={UserIsAuthenticated(AddClient)} />
                <Route exact path='/client/:id' component={UserIsAuthenticated(ClientDetails)} />
                <Route exact path='/client/edit/:id' component={UserIsAuthenticated(EditClient)} />
                <Route exact path='/settings' component={UserIsAuthenticated(Settings)} />
                <Route exact path='/login' component={UserIsNotAuthenticated(login)} />
                <Route exact path='/Register' component={UserIsNotAuthenticated(Register)} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
