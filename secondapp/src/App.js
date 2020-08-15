import React from 'react';
import './App.css';
import Login from './Login';
import { Router, Route, browserHistory } from 'react-router';
import Landing from './Landing';

function App() {
  return (
    <Router history={browserHistory}>
      <Route path={"login"} component={Login} />
      <Route path={"landing"} component={Landing} >      </Route>
    </Router>
  );
}

export default App;
