import React, { Component } from 'react'
import Header from './Header';
import Footer from './footer';
import '../Styles/search.css';
import '../Styles/search.scss';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';

export class SearchPage extends Component {
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
                                <div class="filter-buttons">
                                    <FormControl>
                                        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
                                        <Select
                                            value={this.state.selectList}
                                            onChange={this.selectList}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-native-simple',
                                            }}
                                        >
                                            <option value="" />
                                            <option value={10}>Ten</option>
                                            <option value={20}>Twenty</option>
                                            <option value={30}>Thirty</option>
                                        </Select>
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
                    <div class="container-fluid page-top-section">
                        <div class="row m-0">
                            <div class="col-md-8">
                                <h3 class="search-clarification">Vintage vectors<span> (1,278,664)</span></h3>
                                <p>Related Searches: Christmas card, Wedding card, Visiting card, Invitation card, Id card</p>
                            </div>
                            <div class="col-md-4">
                                <div class="filter-buttons">
                                    <span>
                                        <button mat-button>All Content<i class="material-icons">
                                            arrow_drop_down
              </i></button>
                                        <mat-menu>
                                            <button mat-menu-item>Images</button>
                                            <button mat-menu-item>Vectors</button>
                                            <button mat-menu-item>icons</button>
                                            <button mat-menu-item>videos</button>
                                        </mat-menu>
                                    </span>
                                    <span>
                                        <button mat-button>Sort By <i class="material-icons">
                                            arrow_drop_down
              </i></button>
                                        <mat-menu>
                                            <button mat-menu-item>Relevance</button>
                                            <button mat-menu-item>New</button>
                                        </mat-menu>
                                    </span>
                                </div>
                            </div>
                        </div >
                    </div >

                    <div class="container-fluid Result-list-page">
                        <div class="outerContainer">
                            <div class="containerw3 containerw3-margin">
                                <div>
                                    <img routerLink="/ImageInfo" class="image-file" src="{{image.ImagePath}}" />
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
                    </div >

                    <div class="container pagination-section">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-center">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div >
                <Footer />
            </div >
        )
    }
}

export default SearchPage
