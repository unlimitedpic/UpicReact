import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker'
import Homepage from './Components/Homepage';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import SearchPage from './Components/SearchPage';
import Login from './Components/login';
<<<<<<< HEAD
import productinfo from './Components/productinfo';

const routing = (
  <Router>
    {/* <BrowserRouter> */}
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/login" component={Login} />
      <Route path="/productinfo" component={productinfo}/>
=======
import reducer from './redux/reducers/auth'
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhances(
    applyMiddleware(thunk)
));
>>>>>>> 2d1bf4755781b2a23fd6b22f33fcfb5b9bea9951



const app = (
  <Provider store={store}>
      <App />
  </Provider>
)


ReactDOM.render(app, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

