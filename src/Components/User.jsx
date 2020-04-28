import React, { Component } from "react";
import "../Styles/user.scss";

export class User extends Component {
  render() {
    return (
      <div>
        <div className="page-wrapper">
          <div className="site-wrapper">
            <div className="main-content">
              <div className="">
                <div className="card card-profile">
                  <div className="card-avatar">
                    <div className="picture-container">
                      <div className="picture" title="Add Profile Image">
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
                    <h6 className="category text-gray">Id: user888</h6>
                  </div>
                </div>
                <div className="card list-card">
                  <div className="card-content text-left">
                    <a routerLink="profile">
                      <div className="list">
                        <i className="fa fa-user m-r-20"></i>My Profile
                      </div>
                    </a>
                    <a routerLink="favotites">
                      <div className="list">
                        <i className="fa fa-user m-r-20"></i>My Favourites
                      </div>
                    </a>
                    <a routerLink="downloads">
                      <div className="list ">
                        <i className="fa fa-building m-r-20"></i>My Downloads
                      </div>
                    </a>
                    {/* <a routerLink="school-profile">
                                                <div className="list ">
                                                    <i className="fa fa-building m-r-20"></i>My Following
                </div>
                                            </a> */}
                    <a routerLink="uploads">
                      <div className="list ">
                        <i className="fa fa-building m-r-20"></i>My Uploads
                      </div>
                    </a>
                    {/* <!-- <a routerLink="school-profile">
                                                <div className="list ">
                                                    <i className="fa fa-building m-r-20"></i>My subscriptions
                </div>
                                            </a> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
