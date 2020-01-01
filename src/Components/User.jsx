import React, { Component } from 'react'
import '../Styles/user.scss'

export class User extends Component {
    render() {
        return (
            <div>
                <div class="page-wrapper">
                    <div class="site-wrapper">
                        <div class="main-content">
                            {/* <div class="row m-0"> */}
                                <div class="col-md-3 p-t-5">
                                    <div class="card card-profile">
                                        <div class="card-avatar">
                                            <div class="picture-container">
                                                <div class="picture" title="Add Profile Image">
                                                    <img src="" class="picture-src" id="wizardPicturePreview" />
                                                    <input type="file" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card-content">
                                            {/* // <!-- <h3 class="card-title">{{ userProfile.firstName + " " + userProfile.lastName }}</h3> --> */}
                                            <h3 class="card-title">Username</h3>
                                            <h6 class="category text-gray">Id: user888</h6>
                                        </div>
                                    </div>
                                    <div class="card list-card">
                                        <div class="card-content text-left">
                                            <a routerLink="profile">
                                                <div class="list">
                                                    <i class="fa fa-user m-r-20"></i>My Profile
                </div>
                                            </a>
                                            <a routerLink="favotites">
                                                <div class="list">
                                                    <i class="fa fa-user m-r-20"></i>My Favourites
                </div>
                                            </a>
                                            <a routerLink="downloads">
                                                <div class="list ">
                                                    <i class="fa fa-building m-r-20"></i>My Downloads
                </div>
                                            </a>
                                            {/* <a routerLink="school-profile">
                                                <div class="list ">
                                                    <i class="fa fa-building m-r-20"></i>My Following
                </div>
                                            </a> */}
                                            <a routerLink="uploads">
                                                <div class="list ">
                                                    <i class="fa fa-building m-r-20"></i>My Uploads
                </div>
                                            </a>
                                            {/* <!-- <a routerLink="school-profile">
                                                <div class="list ">
                                                    <i class="fa fa-building m-r-20"></i>My subscriptions
                </div>
                                            </a> --> */}

                                        </div>

                                    </div>

                                </div>

                                <div class="col-md-9 p-t-5">
                                    {/* <router-outlet></router-outlet> */}
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default User
