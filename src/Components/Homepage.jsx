import React, { Component } from 'react'
import { Link } from "react-router-dom";
import indianimage from '../assets/img/indian-image.jpg';
import vector from '../assets/img/vector.jpg';
import icons from '../assets/img/icons.jpg';
import footage from '../assets/img/footage.jpg';
import festival from '../assets/img/festival.jpg';
import shopping from '../assets/img/shopping.jpg';
import Animal from '../assets/img/animal.jpg';
import Nature from '../assets/img/nature.jpg';
import florals from '../assets/img/florals.jpg';
import food from '../assets/img/food.jpg';
import Business from '../assets/img/business.jpg';
import Infogaphic from '../assets/img/infographic.jpg';
import Technology from '../assets/img/technology.jpg';
import background from '../assets/img/background.jpg';
import banner1 from '../assets/img/banner-bg1.jpg';
import banner2 from '../assets/img/banner-bg2.jpg';
import '../Styles/homepage.css';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Header from './Header';
import Footer from './footer';



export class Homepage extends Component {
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
                <div class="home-banner-container-bg">
                    <div class="home-banner-image">
                        <div class="container">
                            <div class="col-md-8 offset-md-2">
                                <div class="home-banner-content">
                                    <h2 class="search-box-title-text">
                                        Find Free Vectors, PSD, Icons and photos
                                    </h2>
                                    <div class="home-search-box">
                                        <div class="row search-box-center">
                                            <div class="col-md-3">
                                                <FormControl class="w-100">
                                                    <select class="custom-select custom-select-lg filter-buttons">
                                                        <option selected>All images</option>
                                                        <option value="1">Images</option>
                                                        <option value="2">Videos</option>
                                                        <option value="3">Icons</option>
                                                        <option value="3">Footage</option>
                                                    </select>
                                                </FormControl>
                                            </div>
                                            <div class="col-md-9">
                                                <div class="searchbar-input-field">
                                                    <span><input type="text" class="input-style-control" placeholder="Type here to search" /></span>
                                                    <span class="searchbar-search-button"><i
                                                        class="material-icons searchbar-search-button-icon"><SearchIcon /></i></span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="home-banner-quick-search-list">
                                        <p><span style={{ fontWeight: '500' }}>Quick Search : </span><span>Logo, </span><span>Wedding Invitation,
                                     </span>
                                            <span>Christmas Invitation </span>Or
                                        <span>Business Card</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content-category-section">
                    <div class="container">
                        <div class="row m-0">
                            <div class="col-md-6 col-lg-3 no-padding">
                                <Link to="/search">
                                    <div class="category-content-box">
                                        <div class="category-content-image-box">
                                            <img class="category-content-image" src={vector} />
                                        </div>
                                        <div class="category-content-text">
                                            <h5 class="f-w-500">Vectors</h5>
                                            <p class="m-0">Take control with royalty-free vectors. Edit with no loss of quality</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div class="col-md-6 col-lg-3 no-padding">
                                <div class="category-content-box">
                                    <div class="category-content-image-box">
                                        <img class="category-content-image" src={indianimage} />
                                    </div>
                                    <div class="category-content-text">
                                        <h5 class="f-w-500">Indian Images</h5>
                                        <p class="m-0">Explore thousands Indian stock images</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 no-padding">
                                <div class="category-content-box">
                                    <div class="category-content-image-box">
                                        <img class="category-content-image" src={icons} />
                                    </div>
                                    <div class="category-content-text">
                                        <h5 class="f-w-500">Icons</h5>
                                        <p class="m-0">Find icons for every project. Practical and universal</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-3 no-padding">
                                <div class="category-content-box">
                                    <div class="category-content-image-box">
                                        <img class="category-content-image" src={footage} />
                                    </div>
                                    <div class="category-content-text">
                                        <h5 class="f-w-500">Footage</h5>
                                        <p class="m-0">Experience HD and 4K video clips, including exclusive content</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sub-category-section">
                    <div class="container">
                        <h3 class="content-category-heading">Browse by categories
    </h3>
                        <div class="outerContainer">
                            <div class="containerw3 containerw3-margin">
                                <div>
                                    <img class="image-file" src={festival} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>Festival</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img class="image-file" src={shopping} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>Shoppng</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img class="image-file" src={Animal} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>Animals</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img class="image-file" src={Nature} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>Narute</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img class="image-file" src={florals} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>Florals</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img class="image-file" src={food} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>Food</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img class="image-file" src={Business} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>Business</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img class="image-file" src={Infogaphic} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>infographic</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img class="image-file" src={Technology} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>Technology</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img class="image-file" src={background} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>Background</h5>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img class="image-file" src={background} />
                                    <div class="image-description-bottom">
                                        <div class="description-text">
                                            <h5>Templates</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >


                <div class="about-design-collection">
                    <div class="container">
                        <h4>Royalty free photos and videos</h4>
                        <p class="m-t-12">unlimitedpic offers the best quality, royalty free stock photos, music and video for nearly any
                          application.
                          From illustrations to vectors, when you need the perfect image for your website or blog, we have you covered. Our
                          massive selection of stock footage and audio clips are the ideal choice to set the scene in your next short or
      feature film.</p>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }
}

export default Homepage