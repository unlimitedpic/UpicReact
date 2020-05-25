import React, { Component } from 'react'
import Header from './Header';
import Footer from './footer';
import '../Styles/search.css';
import '../Styles/search.scss';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import unlimitedpic from '../assets/img/unlimitedpic.svg';
import icons from '../assets/img/icons.jpg';
import SearchIcon from '@material-ui/icons/Search';
import '../Styles/productinfo.scss';

export class productinfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectList: '',

        };
        this.selectList = this.selectList.bind(this)
    }



    selectList(e) {
        this.setState({
            selectList: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div class="Top-search-wrapper">
                    <div class="col-md-8 offset-md-2">
                        <div class="search-box-center">
                            <div class="searchbar-media-filter">
                                <div>
                                    <FormControl>
                                        <select class="custom-select custom-select-lg filter-buttons">
                                            <option selected>All images</option>
                                            <option value="1">Images</option>
                                            <option value="2">Videos</option>
                                            <option value="3">Icons</option>
                                            <option value="3">Footage</option>
                                        </select>
                                    </FormControl>
                                </div>
                            </div>
                            <div class="searchbar-input-field">
                                <span><input type="text" class="input-style-control" placeholder="Type here to search" /></span>
                                <span class="searchbar-search-button"><SearchIcon /></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="Search-result-container">
                    <div class="top-image-info-section ">
                        <div class="container">
                            <div class="row m-0">
                                <div class="col-md-7 resource-media">
                                    <div class="resource-media-box">
                                        <div class="resource-image">
                                            <img className="brand-logo" src={icons} />
                                        </div>
                                    </div>
                                    <div class="resource-media-bottom-actions">
                                        <div class="social-share float-left">
                                            <ul class="social-list">
                                                <li>Share on :</li>
                                                <li><i class="fa fa-twitter"></i></li>
                                                <li><i class="fa fa-twitter"></i></li>
                                                <li><i class="fa fa-twitter"></i></li>
                                            </ul>
                                        </div>
                                        <div class="Download-preview-btn float-right">
                                            <p class="m-0">Download Preview</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="resource-info">
                                        <h3>Happy Holidays Lettering Vector</h3>
                                        <p>
                                            Happy Holidays white handwritten lettering in retro style on red vector
                                            background.
          </p>
                                        <p>Vector Id: 1530426</p>
                                    </div>

                                    {/* <p>Please select payment process:</p>
                                    <mat-radio-group>
                                        <p>
                                            <mat-radio-button value="1">Single Payment Rs. 755 inr
                                    </mat-radio-button>
                                        </p>
                                        <p>
                                            <mat-radio-button value="2">Subscription</mat-radio-button>
                                        </p>
                                    </mat-radio-group> */}

                                    <div class="payment-option">
                                        <p><span class="f-w-500">File Format : </span> AI, EPS & JPEG</p>
                                    </div>
                                    <div class="row m-0 download-button">
                                        <button class="btn btn-blue float-left">
                                            Free Download
                                        </button>
                                        <div>
                                            <i class="fa fa-heart-o favourite-btn"></i>
                                        </div>
                                    </div>

                                    <div class="content-source">
                                        <p class="f-w-500">The designer of the work</p>
                                        <div class="source-avatar-info">
                                            <div class="sharer-avatar" routerLink="/Portfolio">
                                                {/* <img class="sharer-avatar-img" src="assets/img/florals.jpg"> */}
                                                <p class="sharer-name">GraphcDzyns</p>
                                            </div>
                                        </div>
                                        <div class="sharer-follow-button">
                                            <button type="button" class="btn btn-labeled btn-success">
                                                <span class="btn-label"> <i class="fa fa-twitters"></i></span>Follow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="container-fluid result-similar-search">
                    <div class="site-wrapper">
                        <div class="search-keywords">
                            <h3 class="f-w-400">Related Keywords</h3>
                            <ul class="keyword-list">
                                <li><a>Florals</a></li>
                                <li><a>Florals</a></li>
                                <li><a>Florals</a></li>
                            </ul>
                        </div>

                        <div class="similar-images">
                            <h3 class="f-w-400">Related vectors</h3>
                            <div class="outerContainer">
                                <div class="containerw3 containerw3-margin">
                                    <div>
                                        <img class="image-file" src={icons} />
                                        <div class="image-btns-right">
                                            <li class="action-buttons"><i class="fa fa-heart"></i></li>
                                            <li class="action-buttons"><i class="fa fa-share-alt"></i></li>
                                        </div>
                                        <div class="image-description-bottom">
                                            <div class="description-text">
                                                <h6>technoloy</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row m-0 view-more-button">
                                <button type="button" class="btn btn-blue">
                                    View More..
        </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div >
        )
    }
}

export default productinfo
