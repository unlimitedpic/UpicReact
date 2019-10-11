import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker'
import Homepage from './Components/Homepage';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import SearchPage from './Components/SearchPage';

const routing = (
  <Router>
    {/* <BrowserRouter> */}
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/search" component={SearchPage} />

      </Switch>
    {/* </BrowserRouter> */}
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
