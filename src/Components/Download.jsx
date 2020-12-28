import React, { Component } from "react";
import "../Styles/download.scss";
import "../Styles/user.scss";
import Header from "./Header";
import Footer from "./footer";
import { Menu } from "semantic-ui-react";
import {
  ProfileDetails,
  Myfavorite,
  Myupload,
  Mydownload,
  SubCatergry,
  TypeCatergery
} from "../Networks/Usercall";
import FormControl from "@material-ui/core/FormControl";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

import { connect } from "react-redux";
import axios from "axios";

const authToken = localStorage.getItem("token");
const AuthStr = `sessionid=${authToken}`;

export class Download extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "profile",
      details: [],
      favorite: [],
      upload: [],
      download: [],
      CardDetails: [],
      typeData: [],
      Subimages: [],
      subImage: ""
    };
    this.handleItem = this.handleItem.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
  }

  handleItem(e, { name }) {
    this.setState({ activeItem: name });
  }

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  fileChangedHandler = (event) => {
    this.setState({ file: event.target.files[0] })
    // this.setState({ files: [this.state.files, e.target.files] })
  }

  handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state.leaveRequestStatus);

    const leave_request_data = new FormData();

    leave_request_data.set("user", this.state.selected_option);
    leave_request_data.set("filetype", this.state.filetype);
    leave_request_data.append("sub_category_type", this.state.subImage);
    leave_request_data.set("image", this.state.image);
    leave_request_data.set("image_files", this.state.image_files);
    leave_request_data.set("image_title", this.state.image_title);
    leave_request_data.set("image_description", this.state.image_description);
    leave_request_data.set("image_tags", this.state.image_tags);
    //  formData.append('image_or_file', this.state.file, this.state.file,)

    //     var leave_request_data = {
    //    Type_of_Request: this.state.selected_option,
    //    apply_reason: this.state.textarea_text,
    //    leave_start_date: this.state.startDate,
    //    leave_end_date: this.state.endDate,
    //     image_or_file:this.state.selectedFile,

    //  };
    //  console.log("leaverequestdata", leave_request_data.requestType);
    const config = {
      method: "POST",
      url: "/api/image/",
      withCredentials: true,
      data: leave_request_data,
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${this.props.token}`,
        "content-type": "multipart/form-data",
        Accept: "application/json"
      }
    };

    axios(config).then(response => {
      console.log(response.data);
    });

    // console.log(leave_request_data);
  }

  componentDidMount() {
    SubCatergry().then(res => {
      this.setState({
        Subimages: res.data
      });
      console.log(this.state.Subimages, "data");
    });

    TypeCatergery().then(res => {
      this.setState({
        typeData: res.CardDetailsdata
      });
      console.log(this.state.typeData, "data");
    });

    ProfileDetails(this.props.token).then(res => {
      this.setState({
        details: res.data.data[0]
      },()=>{
        console.log(this.state.details, "data", res.data.data[0]);
      });
    });

    Myfavorite(this.props.token).then(res => {
      this.setState({
        favorite: res.data
      });
    });

    Myupload(this.props.token).then(res => {
      this.setState({
        upload: res.data
      });
    });

    Mydownload(this.props.token).then(res => {
      this.setState({
        download: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Header {...this.props} />
        <div class="page-wrapper">
          <div class="site-wrapper">
            <div className="main-content">
              <div className="row m-0">
                <div className="col-md-3 p-t-5">
                  <div className="page-wrapper">
                    <div className="site-wrapper">
                      <div className="main-content">
                        <div className="">
                          <div className="card card-profile">
                            <div className="card-avatar">
                              <div className="picture-container">
                                <div
                                  className="picture"
                                  title="Add Profile Image"
                                >
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
                              <h6 className="category text-gray">
                                Id: user888
                              </h6>
                            </div>
                          </div>
                          <div className="card list-card">
                            <div className="card-content text-left">
                              <Menu.Item
                                routerLink="profile"
                                name="profile"
                                onClick={this.handleItem}
                                activeclassname="active"
                                active={this.state.activeItem === "profile"}
                              >
                                <div className="list">
                                  <i className="fa fa-user m-r-20"></i>
                                  My Profile
                                </div>
                              </Menu.Item>
                              <Menu.Item
                                routerLink="favotites"
                                name="favotites"
                                onClick={this.handleItem}
                                activeclassname="active"
                                active={this.state.activeItem === "favotites"}
                              >
                                <div className="list">
                                  <i className="fa fa-user m-r-20"></i>My
                                  Favourites
                                </div>
                              </Menu.Item>
                              <Menu.Item
                                routerLink="download"
                                name="download"
                                onClick={this.handleItem}
                                activeclassname="active"
                                active={this.state.activeItem === "download"}
                              >
                                <div className="list ">
                                  <i className="fa fa-building m-r-20"></i>My
                                  Downloads
                                </div>
                              </Menu.Item>
                              {/* <Menu.Item
                                routerLink="uploads"
                                name="uploads"
                                onClick={this.handleItem}
                                activeclassname="active"
                                active={this.state.activeItem === "uploads"}
                              >
                                <div className="list ">
                                  <i className="fa fa-building m-r-20"></i>My
                                  Uploads
                                </div>
                              </Menu.Item> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {this.state.activeItem === "profile" && (
                  <div>
                    <div>
                      <div class="main-content">
                        <div class="card">
                          <div class="card-content">
                            <div class="row title-block m-0">
                              <h4 class="pull-left f-w-500 m-0">My Profile</h4>
                            </div>
                            <div>
                              <form autoComplete="off">
                                <TextField
                                  id="filled-multiline-static"
                                  style={{ width: "150px" }}
                                  multiline
                                  rows="1"
                                  margin="normal"
                                  placeholder="Enter The Title"
                                  readOnly
                                  value={this.state.details.email}
                                />
                              </form>
                            </div>
                            <form autoComplete="off">
                              <TextField
                                id="filled-multiline-static"
                                style={{ width: "250px" }}
                                multiline
                                rows="1"
                                margin="normal"
                                readOnly
                                value={this.state.details.first_name}
                              />
                            </form>
                            <form autoComplete="off">
                              <TextField
                                id="filled-multiline-static"
                                style={{ width: "250px" }}
                                multiline
                                rows="1"
                                margin="normal"
                                readOnly
                                value={this.state.details.last_name}
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {this.state.activeItem === "uploads" && (
                  <div>
                    <div>
                      <div class="main-content">
                        <div class="card">
                          <div class="card-content">
                            <div class="row title-block m-0">
                              <h4 class="pull-left f-w-500 m-0">My Uploads</h4>
                            </div>

                            <Grid xs={12} md={12} lg={12} spacing={3}>
                              <FormControl style={{ width: "100%" }}>
                                {/* <FormHelperText>Select Project</FormHelperText> */}
                                <InputLabel htmlFor="select-multiple">
                                  Select the file type
                                </InputLabel>

                                {/* <Select
                                  multiple
                                  value={this.state.filetype}
                                  onChange={e => this.change(e)}
                                  name="filetype"
                                >
                                  {this.state.typeData.map(typeData => (
                                    <MenuItem
                                      key={typeData.name}
                                      value={typeData.name}
                                    >
                                      {typeData.name} {typeData.name}
                                    </MenuItem>
                                  ))}
                                </Select> */}
                                <FormHelperText></FormHelperText>
                              </FormControl>
                            </Grid>

                            {/* <div className="col-md-3">
                              <FormControl className="w-100">
                                <select
                                  className="custom-select custom-select-lg filter-buttons"
                                  onChange={e => this.change(e)}
                                  value={this.state.type}
                                  name="type"
                                >
                                  <option selected>All images</option>
                                  {this.state.typeData.map(typeData => (
                                    <option
                                      key={typeData.name}
                                      value={typeData.name}
                                    >
                                      {typeData.name}
                                    </option>
                                  ))}
                                </select>
                              </FormControl>
                            </div> */}
                            <Grid xs={12} md={12} lg={12} spacing={3}>
                              <FormControl style={{ width: "100%" }}>
                                {/* <FormHelperText>Select Project</FormHelperText> */}
                                <InputLabel htmlFor="select-multiple">
                                  Select User to this Project
                                </InputLabel>

                                {/* <Select
                                  multiple
                                  value={this.state.subImage}
                                  onChange={e => this.change(e)}
                                  name="subImage"
                                >
                                  {this.state.Subimages.map(Subimages => (
                                    <MenuItem
                                      key={Subimages.name}
                                      value={Subimages.name}
                                    >
                                      {Subimages.name} {Subimages.name}
                                    </MenuItem>
                                  ))}
                                </Select> */}
                                <FormHelperText></FormHelperText>
                              </FormControl>
                            </Grid>
                            {/* <div className="col-md-3">
                              <FormControl className="w-100">
                                <select
                                  className="custom-select custom-select-lg filter-buttons"
                                  onChange={e => this.change(e)}
                                  value={this.state.subImage}
                                  name="subImage"
                                >
                                  <option selected>All images</option>
                                  {this.state.Subimages.map(Subimages => (
                                    <option
                                      key={Subimages.name}
                                      value={Subimages.name}
                                    >
                                      {Subimages.name}
                                    </option>
                                  ))}
                                </select>
                              </FormControl>
                            </div> */}

                            <div>
                              <form autoComplete="off">
                                <TextField
                                  id="filled-multiline-static"
                                  style={{ width: "150px" }}
                                  multiline
                                  rows="1"
                                  margin="normal"
                                  placeholder="Enter The Title"
                                  onChange={e => this.change(e)}
                                  value={this.state.image_title}
                                />
                              </form>
                            </div>
                            <form autoComplete="off">
                              <TextField
                                id="filled-multiline-static"
                                style={{ width: "250px" }}
                                multiline
                                rows="1"
                                margin="normal"
                                placeholder="Enter The Tags"
                                onChange={e => this.change(e)}
                                value={this.state.image_tags}
                              />
                            </form>
                            <form autoComplete="off">
                              <TextField
                                rowsMax={4}
                                placeholder="Enter The Descrition"
                                margin="normal"
                                style={{ width: "250px" }}
                                multiline
                                rows="5"
                                onChange={e => this.change(e)}
                                value={this.state.image_description}
                              />
                            </form>
                            <div>
                              <h6>Upload File</h6>
                              <input
                                type="file"
                                multiple
                                onChange={this.fileChangedHandler}
                                aria-describedby="fileHelp"
                              />
                              <button onClick={this.fileUploadHandler}> Upload</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {this.state.activeItem === "favotites" && (
                  <div>
                    <div>
                      <div class="main-content">
                        <div class="card">
                          <div class="card-content">
                            <div class="row title-block m-0">
                              <h4 class="pull-left f-w-500 m-0">
                                My Favorites
                              </h4>
                            </div>

                            <div class="my-favorites-list">
                              <div class="container-fluid no-padding">
                                <div class="outerContainer">
                                  <div class="containerw3 containerw3-margin">
                                    <div>
                                      <img class="image-file" />
                                      <div class="image-btns-right">
                                        <li class="action-buttons">
                                          <i class="fa fa-heart"></i>
                                        </li>
                                        <li class="action-buttons">
                                          <i class="fa fa-share-alt"></i>
                                        </li>
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
                    </div>
                  </div>
                )}

                <div>
                  {this.state.activeItem === "download" && (
                    <div className="col-md-9 p-t-5">
                      <div class="main-content">
                        <div class="card">
                          <div class="card-content">
                            <div class="row title-block m-0">
                              <h4 class="pull-left f-w-500 m-0">
                                My Downloads
                              </h4>
                            </div>

                            <div class="my-favorites-list">
                              <div class="container-fluid no-padding">
                                <div class="outerContainer">
                                  <div class="containerw3 containerw3-margin">
                                    <div>
                                      <img class="image-file" />
                                      <div class="image-btns-right">
                                        <li class="action-buttons">
                                          <i class="fa fa-heart"></i>
                                        </li>
                                        <li class="action-buttons">
                                          <i class="fa fa-share-alt"></i>
                                        </li>
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
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token
});

export default connect(mapStateToProps, null)(Download);

// export default Download;
