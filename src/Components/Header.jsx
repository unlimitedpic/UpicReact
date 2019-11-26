import React, { Component } from 'react';
import unlimitedpic from '../assets/img/unlimitedpic.svg';
import '../Styles/header.scss';

export class Header extends Component {
  render() {
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
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                  </div>
                  <div class="form-group form-check float-left">
                    <input type="checkbox" class="custom-control-input" id="customControlAutosizing" />
                    <label class="custom-control-label" for="customControlAutosizing">Remember password</label>
                  </div>
                  <div class="form-group form-check float-right">
                    <label class="form-check-label" for="exampleCheck1">Fogot Password</label>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary btn-lg btn-block">Login</button>
              </div>

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


export default Header


