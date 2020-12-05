import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions/auth";
import { Modal, Icon } from "semantic-ui-react";
// import { SecureRegisterUser } from "../Networks/Auth";
import axios from 'axios';

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisabled: true,
      firstName: '',
      lastName: '',
      gender: '',
      phoneNumber: '',
      email: '',
      password: '',
      data:[],

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.SecureRegisterUser = this.SecureRegisterUser.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (event.target.name === 'firstName') {
      if (event.target.value === '' || event.target.value === null) {
        this.setState({
          firstnameError: true
        })
      } else {
        this.setState({
          firstnameError: false,
          firstName: event.target.value
        })
      }
    }
    if (event.target.name === 'lastName') {
      if (event.target.value === '' || event.target.value === null) {
        this.setState({
          lastnameError: true
        })
      } else {
        this.setState({
          lastnameError: false,
          lastName: event.target.value
        })
      }
    }
    if (event.target.name === 'gender') {
      if (event.target.value === '') {
        this.setState({
          genderError: true
        })
      } else {
        this.setState({
          genderError: false,
          gender: event.target.value
        })
      }
    }
    // if (event.target.name === 'phoneNumber') {
    //   if (event.target.value === '' || event.target.value === null || event.target.value.length < 10) {
    //     this.setState({
    //       phoneNumberError: true
    //     })
    //   } else {
    //     this.setState({
    //       phoneNumberError: false,
    //       phoneNumber: event.target.value
    //     })
    //   }
    // }
    if (event.target.name === 'email') {
      this.validateEmail(event.target.value);
    }
    if (event.target.name === 'password') {
      if (event.target.value === '' || event.target.value === null) {
        this.setState({
          passwordError: true
        })
      } else {
        this.setState({
          passwordError: false,
          password: event.target.value
        })
      }
    }
    if (this.state.firstnameError === false && this.state.lastnameError === false &&
      this.state.emailError === false && this.state.passwordError === false) {
      this.setState({
        isDisabled: false
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    this.SecureRegisterUser(this.state.email, this.state.password, this.state.firstName, this.state.lastName, this.state.phoneNumber, this.state.gender, this.props)

  }

  SecureRegisterUser = (email, password, firstName, lastName, phoneNumber, gender, props) => {
    // Logs user in
    const config = {
      method: 'POST',
      url: '/api/signup',
      withCredentials: true,
      data: {
        email: email,
        password: password,
        profile: {
          first_name: firstName,
          last_name: lastName,
        }
      }
    }
    axios(config).then((res) => {
      // Save data to localstorage.
      this.setState({
        data:res.data
      },()=>{
        this.props.onAuth(email, password);
      })
      console.log(res.data)
      // this.props.onAuth(this.state.email, this.state.password);
    }).catch((err) => {
      console.log('[Error] unsuccessful login attempt', err, props)
    })
  }

  componentDidUpdate(prevProps) {
    console.log('update1')
    if (prevProps.token !== this.props.token) {
      console.log('update')
      this.props.closeLoginModal()
    }

  }

  validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email
      })
    } else {
      this.setState({
        emailError: true
      })
    }
  }

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <Modal
          size="small"
          open={this.props.SignUp}
          onClose={this.close}
          closeIcon
        >
          <Modal.Header>
            Sign Up to unlimitedpic{" "}
            <Icon name="close" onClick={() => this.props.closeSignupModal()} />
          </Modal.Header>
          <Modal.Content>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label>Frist Name</label>
                  <input
                    type="firstName"
                    class="form-control"
                    aria-describedby="firstName"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  {this.state.firstnameError ? <span style={{ color: "red" }}>Please Enter some value</span> : ''}
                </div>
                <div class="form-group">
                  <label>Last Name</label>
                  <input
                    type="lastName"
                    class="form-control"
                    aria-describedby="lastName"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                  {this.state.lastnameError ? <span style={{ color: "red" }}>Please Enter some value</span> : ''}

                </div>
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
                  {this.state.emailError ? <span style={{ color: "red" }}>Please Enter valid email address</span> : ''}

                </div>

                {/* <div class="form-group">
                  <label>Phone Number</label>
                  <input
                    type="phoneNumber"
                    class="form-control"
                    aria-describedby="phoneNumber"
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                  />
                  {this.state.emailError ? <span style={{ color: "red" }}>Please Enter valid Phone Number</span> : ''}
                </div> */}
                {/* <div class="form-group">
                  <label>Gender</label>
                  {/* <input
                    type="gender"
                    class="form-control"
                    id="exampleInputPassword1"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleChange}
                  /> */}

                {/* <select className="custom-select custom-select-lg filter-buttons"
                    onChange={this.handleChange}
                    value={this.state.gender}
                    name="gender"
                  >

                    {/* <option value=' '></option> */}
                {/* <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>


                  </select>

                  {this.state.genderError ? <span style={{ color: "red" }}>Please Select a Gender</span> : ''}


                </div> */}
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
                  {this.state.passwordError ? <span style={{ color: "red" }}>Please enter Password</span> : ''}

                </div>
              </form>
            </div>
            <div class="modal-footer model-custom-footer">
              <button
                type="button"
                class="btn btn-primary btn-lg btn-block"
                onClick={this.handleSubmit}
              // disabled={this.state.isDisabled}
              >
                Sign In
              </button>
            </div>
            {/* <div class="login-model-footer text-center">
              <h6>with your social network</h6>
              <a href="#" class="fa fa-facebook facebook-btn"></a>
              <a href="#" class="fa fa-twitter twitter-btn"></a>
              <hr></hr>
              <div class="login-bottom-textlinkn">
                <p>
                  Not a member <span>REGISTER NOW</span>
                </p>
              </div>
            </div> */}
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error,
    token: state.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.authLogin(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
