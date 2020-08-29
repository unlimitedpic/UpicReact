import React, { Component } from "react";
import { Link } from "react-router-dom";
import unlimitedpic from "../assets/img/unlimitedpic.svg";
import "../Styles/header.scss";
import { connect } from "react-redux";
import * as actions from "../redux/actions/auth";
import { Form, Icon, Input, Button, Spin } from "antd";
import Login from "./login";
import { SignUp } from "./SignUp";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginOpen: false,
      SignUp: false,
    };
    this.openLoginModal = this.handleShow.bind(this, true);
    this.openSignupModal = this.handleSignUp.bind(this, true);
    this.closeSignupModal = this.handleSignUp.bind(this, false);
    this.closeLoginModal = this.handleShow.bind(this, false);
  }

  handleShow(value) {
    this.setState({ loginOpen: value });
  }

  handleSignUp(value) {
    this.setState({ SignUp: value });
  }

  render() {
    const Images = `/searchPage/${"images"}`;
    const Vectors = `/searchPage/${"vectors"}`;
    const Icons = `/searchPage/${"icons"}`;
    const Footage = `/searchPage/${"footage"}`;
    const User = `/user`;

    return (
      <div>
        <div class="large-sscren-menu">
          <nav class="navbar navbar-expand-lg navbar-light bg-transperant">
            <Link class="navbar-brand" to="/">
              <img className="brand-logo" src={unlimitedpic} />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse top-ul-li-style"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mr-auto f-w-600 float-left">
                <li class="nav-item active">
                  <Link class="nav-link" to={Images}>
                    Images <span class="sr-only">(current)</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={Vectors}>
                    Vectors
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={Icons}>
                    Icons
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={Footage}>
                    Footage
                  </Link>
                </li>
                {this.props.token && (
                  <li class="nav-item">
                    <Link class="nav-link" to={User}>
                      Dashboard
                    </Link>
                  </li>
                )}

                {/* <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </li> */}
                {/* <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li> */}
              </ul>
              <Login
                loginOpen={this.state.loginOpen}
                closeLoginModal={this.closeLoginModal}
                openLoginModal={this.openLoginModal}
              />
              <SignUp
                SignUp={this.state.SignUp}
                closeSignupModal={this.closeSignupModal}
                openSignupModal={this.openSignupModal}
              />
              {this.props.token === null && (
                <ul class="navbar-nav f-w-600 float-right">
                  <li class="nav-item active" 
                  onClick={this.openLoginModal}>
                    <a class="nav-link">Sign In</a>
                  </li>
                  <li
                    class="nav-item sign-up-btn"
                    onClick={this.openSignupModal}
                  >
                    <a class="nav-link">Sign Up</a>
                  </li>
                </ul>
              )}

              {this.props.token && (
                <ul class="navbar-nav f-w-600 float-right">
                  {/* <li
                    class="nav-item active"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={this.openLoginModal}
                  >
                    <a class="nav-link">Sign In</a>
                  </li> */}
                  <li
                    class="nav-item sign-up-btn"
                    onClick={()=>{
                      this.props.logout();
                      this.props.history.push('/')
                    }}
                  >
                    <a class="nav-link">Logout</a>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
        {/* <div
          class="modal fade"
          id="exampleModalCenterreg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Sign up to Unlimitedpic
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="Username">User name</label>
                    <input
                      type="email"
                      class="form-control"
                      id="esername"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  {/* <div class="form-group form-check float-left">
                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing" />
                    <label class="custom-control-label" for="customControlAutosizing">Remember password</label>
                  </div>                  */}
        {/* </form>
              </div>
              <div class="modal-footer model-custom-footer">
                <button type="button" class="btn btn-primary btn-lg btn-block">
                  Sign Up
                </button>
              </div>

              <div class="login-model-footer text-center">
                <h6>with your social network</h6>
                <a href="#" class="fa fa-facebook facebook-btn"></a>
                <a href="#" class="fa fa-twitter twitter-btn"></a>
                <hr></hr>
                <div class="login-bottom-textlinkn">
                  <p>
                    Already have an account <span>LOG IN</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}{" "}
        <div
          class="modal fade"
          id="exampleModalCenterreg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Sign up to Unlimitedpic
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="Username">User name</label>
                    <input
                      type="email"
                      class="form-control"
                      id="esername"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  {/* <div class="form-group form-check float-left">
                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing" />
                    <label class="custom-control-label" for="customControlAutosizing">Remember password</label>
                  </div>                  */}
                </form>
              </div>
              <div class="modal-footer model-custom-footer">
                <button type="button" class="btn btn-primary btn-lg btn-block">
                  Sign Up
                </button>
              </div>

              <div class="login-model-footer text-center">
                <h6>with your social network</h6>
                <a href="#" class="fa fa-facebook facebook-btn"></a>
                <a href="#" class="fa fa-twitter twitter-btn"></a>
                <hr></hr>
                <div class="login-bottom-textlinkn">
                  <p>
                    Already have an account <span>LOG IN</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
