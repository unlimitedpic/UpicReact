import React, { Component } from "react";
import "../Styles/download.scss";
import "../Styles/user.scss";
import Header from "./Header";
import Footer from "./footer";
import { Menu } from "semantic-ui-react";
import {
  ProfileDetails,
  Myfavorite,
  Myupload,
  Mydownload
} from "../Networks/Usercall";
import { connect } from "react-redux";
import Axios from "axios";



const authToken = localStorage.getItem('token');
const AuthStr = `sessionid=${authToken}`;

export class Download extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "profile",
      details: [],
      favorite: [],
      upload: [],
      download: [],
      CardDetails:[],
    };
    this.handleItem = this.handleItem.bind(this);
  }

  handleItem(e, { name }) {
    this.setState({ activeItem: name });
  }

  componentDidMount() {
    // console.log(AuthStr ,'AuthStr', this.props.token)
    // Axios.get('/api/profile/',
    //   {
    //     headers: {
    //       accept: "application/json",
    //       Authorization: `Bearer ${this.props.token}`
    //     }
    //   }
    // )
    //   .then(res => {

    //     this.setState({
    //       CardDetails: res.data
    //     });
    //     console.log("KAfls",res);

    //   })
    //   .catch(err => { })


    ProfileDetails(this.props.token).then(res => {
      this.setState({
        details: res.data
      });
    });

    Myfavorite(this.props.token).then(res => {
      this.setState({
        favorite: res.data
      });
    });

    Myupload(this.props.token).then(res => {
      this.setState({
        upload: res.data
      });
    });

    Mydownload(this.props.token).then(res => {
      this.setState({
        download: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header {...this.props}/>
        <div class="page-wrapper">
          <div class="site-wrapper">
            <div className="main-content">
              <div className="row m-0">
                <div className="col-md-3 p-t-5">
                  <div className="page-wrapper">
                    <div className="site-wrapper">
                      <div className="main-content">
                        <div className="">
                          <div className="card card-profile">
                            <div className="card-avatar">
                              <div className="picture-container">
                                <div
                                  className="picture"
                                  title="Add Profile Image"
                                >
                                  <img
                                    src=""
                                    className="picture-src"
                                    id="wizardPicturePreview"
                                  />
                                  <input type="file" />
                                </div>
                              </div>
                            </div>

                            <div className="card-content">
                              {/* // <!-- <h3 className="card-title">{{ userProfile.firstName + " " + userProfile.lastName }}</h3> --> */}
                              <h3 className="card-title">Username</h3>
                              <h6 className="category text-gray">
                                Id: user888
                              </h6>
                            </div>
                          </div>
                          <div className="card list-card">
                            <div className="card-content text-left">
                              <Menu.Item
                                routerLink="profile"
                                name="profile"
                                onClick={this.handleItem}
                                activeclassname="active"
                                active={this.state.activeItem === "profile"}
                              >
                                <div className="list">
                                  <i className="fa fa-user m-r-20"></i>
                                  My Profile
                                </div>
                              </Menu.Item>
                              <Menu.Item
                                routerLink="favotites"
                                name="favotites"
                                onClick={this.handleItem}
                                activeclassname="active"
                                active={this.state.activeItem === "favotites"}
                              >
                                <div className="list">
                                  <i className="fa fa-user m-r-20"></i>My
                                  Favourites
                                </div>
                              </Menu.Item>
                              <Menu.Item
                                routerLink="download"
                                name="download"
                                onClick={this.handleItem}
                                activeclassname="active"
                                active={this.state.activeItem === "download"}
                              >
                                <div className="list ">
                                  <i className="fa fa-building m-r-20"></i>My
                                  Downloads
                                </div>
                              </Menu.Item>
                              <Menu.Item
                                routerLink="uploads"
                                name="uploads"
                                onClick={this.handleItem}
                                activeclassname="active"
                                active={this.state.activeItem === "uploads"}
                              >
                                <div className="list ">
                                  <i className="fa fa-building m-r-20"></i>My
                                  Uploads
                                </div>
                              </Menu.Item>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.activeItem === "profile" && (
                  <div>
                    <div>
                      <div class="main-content">
                        <div class="card">
                          <div class="card-content">
                            <div class="row title-block m-0">
                              <h4 class="pull-left f-w-500 m-0">My Profile</h4>
                            </div>
                            {/* <mat-tab-group #matgroup>
        <mat-tab>
          <ng-template mat-tab-label> */}
                            {/* <mat-icon class="example-tab-icon m-r-10 f-18 m-t-5">person</mat-icon> */}
                            Basic Profile
                            {/* </ng-template> */}
                            <form class=" my-profile-forms">
                              <div class="row">
                                <div class="col-md-6 p-t-5 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input
                                    matInput
                                    placeholder="Username"
                                    name="Username"
                                  />
                                  {/* </mat-form-field> */}
                                </div>
                                <div class="col-md-6 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input
                                    matInput
                                    placeholder="Email"
                                    name="Email"
                                  />
                                  {/* </mat-form-field> */}
                                </div>
                                <div class="col-md-6 p-t-5 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input
                                    matInput
                                    placeholder="Phone Number"
                                    name="Phone Number"
                                  />
                                  {/* </mat-form-field> */}
                                </div>
                                <div class="col-md-6 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input
                                    matInput
                                    placeholder="Location"
                                    name="Location"
                                  />
                                  {/* </mat-form-field> */}
                                </div>
                              </div>
                            </form>
                            <div>
                              <button
                                mat-button
                                class="btn custom-btn-blue float-right"
                              >
                                Update
                              </button>
                              <div class="clearfix"></div>
                            </div>
                            {/* </mat-tab> */}
                            {/* <mat-tab> */}
                            {/* <ng-template mat-tab-label> */}
                            {/* <mat-icon class="example-tab-icon m-r-10 f-18 m-t-5">person</mat-icon> */}
                            Password
                            {/* </ng-template> */}
                            <form class="Password-tab my-profile-forms">
                              <h4 class="change-password-title">
                                Change Password
                              </h4>
                              <div class="row">
                                <div class="col-md-6 p-t-5 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input matInput placeholder="Old Password" />
                                  {/* </mat-form-field> */}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input matInput placeholder="New Password" />
                                  {/* </mat-form-field> */}
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 p-t-5 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input
                                    matInput
                                    placeholder="Confirm New Password"
                                  />
                                  {/* </mat-form-field> */}
                                </div>
                              </div>
                            </form>
                            <div>
                              <button
                                mat-button
                                class="btn custom-btn-blue float-right"
                              >
                                Update
                              </button>
                              <div class="clearfix"></div>
                            </div>
                            {/* </mat-tab> */}
                            {/* </mat-tab-group> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {this.state.activeItem === "uploads" && (
                  <div>
                    <div>
                      <div class="main-content">
                        <div class="card">
                          <div class="card-content">
                            <div class="row title-block m-0">
                              <h4 class="pull-left f-w-500 m-0">My Uploads</h4>
                            </div>

                            {/* <mat-tab-group #matgroup>
        <mat-tab>
          <ng-template mat-tab-label>
            <mat-icon class="example-tab-icon m-r-10 f-18 m-t-5">person</mat-icon>
            Uppload Overview
          </ng-template> */}
                            <form class=" my-profile-forms">
                              <div class="row">
                                <div class="col-md-6 p-t-5 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input
                                    matInput
                                    placeholder="Username"
                                    name="Username"
                                  />
                                  {/* </mat-form-field> */}
                                </div>
                                <div class="col-md-6 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input
                                    matInput
                                    placeholder="Email"
                                    name="Email"
                                  />
                                  {/* </mat-form-field> */}
                                </div>
                                <div class="col-md-6 p-t-5 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input
                                    matInput
                                    placeholder="Phone Number"
                                    name="Phone Number"
                                  />
                                  {/* </mat-form-field> */}
                                </div>
                                <div class="col-md-6 p-b-5 p-t-5">
                                  {/* <mat-form-field class="w-100"> */}
                                  <input
                                    matInput
                                    placeholder="Location"
                                    name="Location"
                                  />
                                  {/* </mat-form-field> */}
                                </div>
                              </div>
                            </form>
                            <div>
                              <button
                                mat-button
                                class="btn custom-btn-blue float-right"
                              >
                                Update
                              </button>
                              <div class="clearfix"></div>
                            </div>
                            {/* </mat-tab> */}

                            {/* <mat-tab>
          <ng-template mat-tab-label>
            <mat-icon class="example-tab-icon m-r-10 f-18 m-t-5">person</mat-icon>
            Upload Content
          </ng-template> */}
                            <form class="Password-tab my-profile-forms">
                              <h4 class="change-password-title">
                                Change Password
                              </h4>
                              <div class="row">
                                <div class="col-md-6 p-t-5 p-b-5 p-t-5">
                                  <input matInput placeholder="Old Password" />
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 p-b-5 p-t-5">
                                  <input matInput placeholder="New Password" />
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-md-6 p-t-5 p-b-5 p-t-5">
                                  <input
                                    matInput
                                    placeholder="Confirm New Password"
                                  />
                                </div>
                              </div>
                            </form>
                            <div>
                              <button
                                mat-button
                                class="btn custom-btn-blue float-right"
                              >
                                Update
                              </button>
                              <div class="clearfix"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {this.state.activeItem === "favotites" && (
                  <div>
                    <div>
                      <div class="main-content">
                        <div class="card">
                          <div class="card-content">
                            <div class="row title-block m-0">
                              <h4 class="pull-left f-w-500 m-0">
                                My Favorites
                              </h4>
                            </div>

                            <div class="my-favorites-list">
                              <div class="container-fluid no-padding">
                                <div class="outerContainer">
                                  <div class="containerw3 containerw3-margin">
                                    <div>
                                      <img class="image-file" />
                                      <div class="image-btns-right">
                                        <li class="action-buttons">
                                          <i class="fa fa-heart"></i>
                                        </li>
                                        <li class="action-buttons">
                                          <i class="fa fa-share-alt"></i>
                                        </li>
                                      </div>
                                      <div class="image-description-bottom">
                                        <div class="description-text">
                                          <h5></h5>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div>
                  {this.state.activeItem === "download" && (
                    <div className="col-md-9 p-t-5">
                      <div class="main-content">
                        <div class="card">
                          <div class="card-content">
                            <div class="row title-block m-0">
                              <h4 class="pull-left f-w-500 m-0">
                                My Downloads
                              </h4>
                            </div>

                            <div class="my-favorites-list">
                              <div class="container-fluid no-padding">
                                <div class="outerContainer">
                                  <div class="containerw3 containerw3-margin">
                                    <div>
                                      <img class="image-file" />
                                      <div class="image-btns-right">
                                        <li class="action-buttons">
                                          <i class="fa fa-heart"></i>
                                        </li>
                                        <li class="action-buttons">
                                          <i class="fa fa-share-alt"></i>
                                        </li>
                                      </div>
                                      <div class="image-description-bottom">
                                        <div class="description-text">
                                          <h5></h5>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token
});

export default connect(mapStateToProps, null)(Download);

// export default Download;
