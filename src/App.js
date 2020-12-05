import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  AdminAuthRoute,
  UserAuthRoute,
  PublicRoute
} from "./SimplifiedAuthRoute";
import Homepage from "./Components/Homepage";
import SearchPage from "./Components/SearchPage";
import Download from "./Components/Download";
import AdminPage from "./Components/AdminPage";

const authToken = localStorage.getItem("token");
const AuthStr = `sessionid=${authToken}`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {/* user routes */}
            {/* <UserAuthRoute exact path='/user' component={Download} /> */}

            {/* Admin routes */}
            {/* <AdminAuthRoute exact path='/admin' component={Download} /> */}

            {/* TeamLead routes */}

            {/* Public routes*/}
            <PublicRoute
              exact
              path="/"
              component={Homepage}
              // UserAuthRoute="/frd/Employee_Dashboard/"
              // AdminAuthRoute="/frd/approve/"
            />
            <PublicRoute exact path="/searchPage" component={SearchPage} />
            <PublicRoute
              exact
              path="/searchPage/:type"
              component={SearchPage}
            />
            <PublicRoute
              exact
              path="/admin"
              component={AdminPage}
            />

            <PublicRoute exact path="/searchPage" component={SearchPage} />
            {(this.props.token || authToken) && (
              <PublicRoute exact path="/user" component={Download} />
            )}

            {(this.props.isAdmin || authToken) && (
              <PublicRoute exact path="/admin" component={AdminPage} />
            )}
            {/* <PublicRoute exact
              path='/forgotpassword/'
              component={ForgotPassword}
            />
            <Route component={Page404} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token,
  isAdmin: state.isAdmin
});

export default connect(mapStateToProps, null)(App);

// export default App;
