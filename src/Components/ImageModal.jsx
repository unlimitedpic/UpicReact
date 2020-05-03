import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";
import axios from "axios";

var FileDownload = require("js-file-download");

class ImageModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectList: "",
      res: [],
      posts: [],
      open: false,
      postData: "",
      imageDetails: []
    };
    this.imageFile = this.imageFile.bind(this);
  }

  imageFile() {
    const config = {
      url: `/api/image_download/?imageId=${this.props.imageDetails.id}`,
      method: "GET",
      withCredentials: true
    };
    axios(config).then(response => {
      FileDownload(response.data, "unlimited.zip");
    });
  }

  show = size => () => this.setState({ size, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, size } = this.state;

    return (
      <div>
        <Modal size={size} open={this.props.open} onClose={this.close}>
          <Modal.Content>
            <div className="top-image-info-section ">
              <div className="container">
                <div className="row m-0">
                  <div className="col-md-7 resource-media">
                    <div className="resource-media-box">
                      <div className="resource-image">
                        <img src={this.props.imageDetails.image} />
                      </div>
                    </div>
                    <div className="resource-media-bottom-actions">
                      <div className="social-share float-left">
                        <ul className="social-list">
                          <li>Share on :</li>
                          <li>
                            <i className="fa fa-twitter"></i>
                          </li>
                          <li>
                            <i className="fa fa-twitter"></i>
                          </li>
                          <li>
                            <i className="fa fa-twitter"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="Download-preview-btn float-right">
                        <p className="m-0">Download Preview</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="resource-info">
                      <h3>{this.props.imageDetails.image_title}</h3>
                      <p>{this.props.imageDetails.image_description}</p>
                      <p>Vector Id: {this.props.imageDetails.id}</p>
                    </div>

                    <div className="payment-option">
                      <p>
                        <span className="f-w-500">JPG </span> (5250 px X 4017 px)
                      </p>
                    </div>
                    <div className="row m-0 download-button">
                      <button type="button" className="btn btn-blue float-left">
                        <span
                          className="download-text"
                          onClick={() => this.imageFile()}
                        >
                          Free Download
                        </span>
                        <br />
                        <span>AI, EPS JPEG</span>
                      </button>
                      <div>
                        <i className="material-icons favourite-btn">
                          favorite_border
                        </i>
                      </div>
                    </div>

                    <div className="content-source">
                      <p className="f-w-500">The designer of the work</p>
                      <div className="source-avatar-info">
                        <div className="sharer-avatar" routerLink="/Portfolio">
                          <img
                            className="sharer-avatar-img"
                            src="assets/img/florals.jpg"
                          />
                          <p className="sharer-name">GraphcDzyns</p>
                        </div>
                      </div>
                      <div className="sharer-follow-button">
                        <button mat-button className="custom-follow-btn">
                          {" "}
                          <i className="material-icons">add</i> Follow
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid result-similar-search">
              <div className="site-wrapper">
                <div className="search-keywords">
                  <h3 className="f-w-400">Related Keywords</h3>
                  <ul className="keyword-list">
                    <li>
                      <a>Florals</a>
                    </li>
                    <li>
                      <a>Florals</a>
                    </li>
                    <li>
                      <a>Florals</a>
                    </li>
                  </ul>
                </div>

                <div className="similar-images">
                  <h3 className="f-w-400">Related vectors</h3>
                  <div className="outerContainer">
                    <div className="containerw3 containerw3-margin">
                      <div>
                        <img className="image-file" src="{{image.ImagePath}}" />
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
                            <h5></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row m-0 view-more-button">
                    <button type="button" className="btn btn-blue">
                      View More..
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </Modal.Content>
          <Modal.Actions>
            <Button negative>No</Button>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Yes"
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ImageModal;
