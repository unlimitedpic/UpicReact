import React, { Component } from 'react';
import Footer from './Components/footer';
import './App.css';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import BaseRouter from './routes';
import * as actions from './redux/actions/auth';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
        <Router>
          {/* <CustomLayout {...this.props}> */}
          <ScrollUpButton ContainerClassName="ScrollUpButton__Container" TransitionClassName="ScrollUpButton__Toggled">

              <BaseRouter />
              </ScrollUpButton>
          {/* </CustomLayout> */}
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
