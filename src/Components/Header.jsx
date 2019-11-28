import React, { Component } from 'react';
import unlimitedpic from '../assets/img/unlimitedpic.svg';
import '../Styles/header.scss';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/auth';
import { Form, Icon, Input, Button, Spin } from 'antd';

const FormItem = Form.Item;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;


export class Header extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onAuth(values.userName, values.password);
        this.props.history.push('/');
      }
    });
  }
  
  render() {
    let errorMessage = null;
    if (this.props.error) {
        errorMessage = (
            <p>{this.props.error.message}</p>
        );
    }

    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <div class="large-sscren-menu">
          <nav class="navbar navbar-expand-lg navbar-light bg-transperant">
            <a class="navbar-brand" href="#">
              <img className="brand-logo" src={unlimitedpic} />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse top-ul-li-style" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto f-w-600 float-left">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Images <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Vectors</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Icons</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Footage</a>
                </li>
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

              <ul class="navbar-nav f-w-600 float-right">
                <li class="nav-item active" data-toggle="modal" data-target="#exampleModalCenter">
                  <a class="nav-link" href="#">Sign In <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item sign-up-btn">
                  <a class="nav-link" href="#">Sign Up</a>
                </li>
              </ul>
            </div>
          </nav>
        </div >


        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Sign In</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                {errorMessage}
            {
                this.props.loading ?

                <Spin indicator={antIcon} />

                :

                <Form onSubmit={this.handleSubmit} className="login-form">

                    <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                    //   <label for="exampleInputEmail1">Email address</label>
                    // <input type="user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                    </FormItem>

                    <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                    </FormItem>

                    <FormItem>
                      <br />
                    <button type="button" class="btn btn-primary btn-lg btn-block">Login</button>

                    {/* <NavLink 
                        style={{marginRight: '10px'}} 
                        to='/signup/'> signup
                    </NavLink> */}
                    </FormItem>
                </Form>
            }
                </form>
              </div>

              {/* <div class="modal-footer">
                <button type="button" class="btn btn-primary btn-lg btn-block">Login</button>
              </div> */}

              <div class="login-model-footer text-center">
                <h6>with your social network</h6>
                <a href="#" class="fa fa-facebook facebook-btn"></a>
                <a href="#" class="fa fa-twitter twitter-btn"></a>
                <hr></hr>
                <div class="login-bottom-textlinkn">
                  <p>Not a member <span>REGISTER NOW</span></p>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div >
    )
  }
}

const WrappedNormalLoginForm = Form.create()(Header);

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);

// export default Header


