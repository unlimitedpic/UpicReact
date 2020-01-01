import React, { Component } from 'react'
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
import { HomepageImages, SubCatergry } from '../Networks/Usercall'



export class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vector: 'vector',
            india: 'india',
            Homepage: [],
            Subimages: [],
            name:''

        };
        this.vectorImage = this.vectorImage.bind(this)

    }

    // selectList({currentTarget}) {    
    //     console.log(currentTarget.value) 
    //     // e.currentTarget.value would be equivalent
    //   }

    vectorImage(name) {
        this.setState({
            name: name
        }, () => { console.log(this.state.name) })

        this.props.history.push({
            pathname: '/search',
            state: { name: this.state.name }
        })

    }

   



    componentWillMount() {
        HomepageImages()
            .then(res => {
                this.setState({
                    Homepage: res.data

                });
                console.log(this.state.Homepage, 'data')

            });

        SubCatergry()
            .then(res => {
                this.setState({
                    Subimages: res.data

                });
                console.log(this.state.Subimages, 'data')

            });

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
                            {this.state.Homepage.map(
                                Homepage => (

                                    <div class="col-md-6 col-lg-3 no-padding" value="vector">
                                        <div class="category-content-box">
                                            <div class="category-content-image-box">
                                                <img class="category-content-image" src={Homepage.image} />
                                            </div>
                                            <div class="category-content-text">
                                                <h5 class="f-w-500">{Homepage.name}</h5>
                                                <p class="m-0">{Homepage.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                           
                        </div>
                    </div>
                </div>

                <div class="sub-category-section">
                    <div class="container">
                        <h3 class="content-category-heading">Browse by categories</h3>
                        <div class="outerContainer">
                            <div class="containerw3 containerw3-margin">
                                {this.state.Subimages.map(
                                    Subimages => (

                                        <div>
                                            <img class="image-file" src={Subimages.image} />
                                            <div class="image-description-bottom">
                                                <div class="description-text">
                                                    <h5>{Subimages.name}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))}


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