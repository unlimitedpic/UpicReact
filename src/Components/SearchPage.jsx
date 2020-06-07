import React, { Component } from "react";
import Header from "./Header";
import Footer from "./footer";
import "../Styles/search.css";
import "../Styles/search.scss";
import "../Styles/image.scss";
import SearchCompoent from "./SearchCompoent";
import axios from "axios";
import ImageModal from "./ImageModal";

export class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectList: "",
      res: [],
      posts: [],
      show: false,
      postData: "",
      imageDetails: []
    };
    this.selectList = this.selectList.bind(this);
    this.fetchMonthData = this.fetchMonthData.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.imageDetails = this.imageDetails.bind(this);
  }

  selectList(e) {
    this.setState({
      selectList: e.target.value
    });
  }

  fetchMonthData() {
    const { result } = this.props.match.params;
    console.log(result, "result1");
  }

  componentDidMount() {
    const { result } = this.props.match.params;
    const { result1 } = this.props.match.params;

    // console.log(result,result1, result2, 'result2')
    console.log(result, "result1");

    let res = result.split(",");
    console.log(res, "res");

    this.fetchMonthData();

    const config = {
      url: `http://3.21.169.125:8000/api/image_upload/?${result}`,
      method: "GET",
      withCredentials: true
    };
    axios(config).then(res => {
      this.setState(
        {
          posts: res.data
        },
        () => {
          console.log();
        }
      );
      console.log(this.state.posts);
    });
  }

  imageDetails() {
    const config = {
      url: `http://3.21.169.125:8000/api/image_details/?imageId=${this.state.postData}`,
      method: "GET",
      withCredentials: true
    };
    axios(config).then(res => {
      this.setState(
        {
          imageDetails: res.data
        },
        () => {
          console.log();
        }
      );
      console.log(this.state.posts);
    });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(post) {
    this.setState(
      {
        show: true,
        postData: post.id
      },
      () => {
        this.imageDetails();
      }
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div className="Top-search-wrapper">
          {/* <div className="col-md-8 offset-md-2">
                        <div className="search-box-center">
                            <div className="searchbar-media-filter">
                                <div>
                                    <FormControl>
                                        <select className="custom-select custom-select-lg filter-buttons">
                                            <option selected>All images</option>
                                            <option value="1">Images</option>
                                            <option value="2">Videos</option>
                                            <option value="3">Icons</option>
                                            <option value="3">Footage</option>
                                        </select>
                                    </FormControl>
                                </div>
                            </div>
                            <div className="searchbar-input-field">
                                <span><input type="text" className="input-style-control" placeholder="Type here to search" /></span>
                                <span className="searchbar-search-button"><SearchIcon /></span>
                            </div>
                        </div>
                    </div> */}
          <SearchCompoent />
        </div>
        <div className="Search-result-container">
          <div className="container-fluid page-top-section">
            <div className="row m-0">
              <div className="col-md-10">
                <h3 classNameName="search-clarification">
                  Vintage vectors<span>(1,278,664)</span>
                </h3>
                <p>
                  Related Searches: Christmas card, Wedding card, Visiting card,
                  Invitation card, Id card
                </p>
              </div>
              <div className="col-md-2 d-flex align-items-center">
                <select className="custom-select">
                  <option selected>All images</option>
                  <option value="1">Vectors</option>
                  <option value="2">Images</option>
                  <option value="3">Icons</option>
                </select>
              </div>
            </div>
          </div>

          <div className="container-fluid Result-list-page">
            <div className="outerContainer">
              <div className="containerw3 containerw3-margin">
                {this.state.posts && (
                  <React.Fragment>
                    {this.state.posts.map(post => (
                      <div>
                        <p>{post.error}</p>
                        {!post.error && (
                          <React.Fragment>
                            <img
                              className="image-file"
                              src={post.image}
                              onClick={() => this.handleShow(post)}
                            />
                            <div className="image-btns-right">
                              <li className="action-buttons">
                                <i className="fa fa-heart"></i>
                              </li>
                              <li className="action-buttons">
                                <i className="fa fa-share-alt"></i>
                              </li>
                            </div>
                            <div className="image-description-bottom">
                              <div className="description-text">
                                <h5>{post.image_title}</h5>
                              </div>
                            </div>
                          </React.Fragment>
                        )}
                      </div>
                    ))}
                  </React.Fragment>
                )}

                {this.state.posts && (
                  <React.Fragment>
                    <p>{this.state.posts.error}</p>
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ImageModal
          open={this.state.show}
          imageDetails={this.state.imageDetails}
        />
      </div>
    );
  }
}

export default SearchPage;
