import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions/auth";
import { Modal, Icon } from "semantic-ui-react";
import { SignUp } from "./SignUp";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
      email: "",
      password: "",
      SignUp:false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openSignupModal = this.handleSignUp.bind(this, true);
    this.closeSignupModal = this.handleSignUp.bind(this, false);
  }

  handleSignUp(value) {
    this.setState({ SignUp: value });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === "email") {
      this.validateEmail(event.target.value);
    }
    if (event.target.name === "password") {
      if (event.target.value === "" || event.target.value === null) {
        this.setState({
          passwordError: true
        });
      } else {
        this.setState({
          passwordError: false,
          password: event.target.value
        });
      }
    }
    if (this.state.emailError === false && this.state.passwordError === false) {
      this.setState({
        isDisabled: false
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onAuth(this.state.email, this.state.password);
  }

  componentDidUpdate(prevProps) {
    console.log("update1");
    if (prevProps.token !== this.props.token) {
      console.log("update");
      this.props.closeLoginModal();
    }
  }

  validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email
      });
    } else {
      this.setState({
        emailError: true
      });
    }
  }

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <div>
          <Modal
            size="small"
            open={this.props.loginOpen}
            onClose={this.close}
            closeIcon
          >
            <Modal.Header>
              Sign In to unlimitedpic{" "}
              <Icon name="close" onClick={() => this.props.closeLoginModal()} />
            </Modal.Header>
            <Modal.Content>
              <div class="modal-body">
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    {this.state.emailError ? (
                      <span style={{ color: "red" }}>
                        Please Enter valid email
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    {this.state.passwordError ? (
                      <span style={{ color: "red" }}>
                        Please enter Password
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </form>
              </div>
              <div class="modal-footer model-custom-footer">
                <button
                  type="button"
                  class="btn btn-primary btn-lg btn-block"
                  onClick={this.handleSubmit}
                  disabled={this.state.isDisabled}
                >
                  Sign In
                </button>
              </div>
              <div class="login-model-footer text-center">
                <h6>with your social network</h6>
                <a href="#" class="fa fa-facebook facebook-btn"></a>
                <a href="#" class="fa fa-twitter twitter-btn"></a>
                <hr></hr>
                <div class="login-bottom-textlinkn">
                  <p>
                    Not a member{" "}
                    <span  onClick={() => this.props.closeLoginModal(), this.openSignupModal}>REGISTER NOW</span>
                  </p>
                </div>
              </div>
            </Modal.Content>
          </Modal>
        </div>
        <React.Fragment>
          <SignUp
            SignUp={this.state.SignUp}
            closeSignupModal={this.closeSignupModal}
            openSignupModal={this.openSignupModal}
            onAuth={this.props.onAuth}
          />
        </React.Fragment>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    token: state.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.authLogin(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
