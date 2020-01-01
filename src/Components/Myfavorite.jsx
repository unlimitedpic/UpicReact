import React, { Component } from 'react'
import '../Styles/myfavorite.scss'
import Header from './Header'
import Footer from './footer'
import User from './User'

export class Myfavorite extends Component {
    render() {
        return (
            <div>
                  <Header />
                  <User/>
                <div class="main-content">
                    <div class="card">
                        <div class="card-content">
                            <div class="row title-block m-0">
                                <h4 class="pull-left f-w-500 m-0">My Favorites
        </h4>
                            </div>

                            <div class="my-favorites-list">
                                <div class="container-fluid no-padding">
                                    <div class="outerContainer">
                                        <div class="containerw3 containerw3-margin">
                                            <div>
                                                <img class="image-file" />
                                                <div class="image-btns-right">
                                                    <li class="action-buttons"><i class="fa fa-heart"></i></li>
                                                    <li class="action-buttons"><i class="fa fa-share-alt"></i></li>
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
                <Footer />


            </div >
        )
    }
}

export default Myfavorite
