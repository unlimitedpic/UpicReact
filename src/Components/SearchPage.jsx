import React, { Component } from 'react'
import Header from './Header';
import Footer from './footer';
import '../Styles/search.css';
import '../Styles/search.scss';
import InputLabel from '@material-ui/core/InputLabel';
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


    componentDidMount(){
        const { result } = this.props.match.params

        console.log(result, 'result')
    }




    // componentDidMount() {
    //     //to show to employee name


    //     const { name } = this.props.location.state
    //     console.log(name, 'project data Details')
    //     this.setState({
    //         selectList: name
    //     })


    //     console.log(this.state.selectList, 'fsdfdsfd')
    // }


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
                    <div class="container-fluid page-top-section">
                        <div class="row m-0">
                            <div class="col-md-10">
                                <h3 class="search-clarification">Vintage vectors<span>(1,278,664)</span></h3>
                                <p>Related Searches: Christmas card, Wedding card, Visiting card, Invitation card, Id card</p>
                            </div>
                            <div class="col-md-2 d-flex align-items-center">
                                <select class="custom-select">
                                    <option selected>All images</option>
                                    <option value="1">Vectors</option>
                                    <option value="2">Images</option>
                                    <option value="3">Icons</option>
                                </select>
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
