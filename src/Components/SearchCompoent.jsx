import React, { Component } from 'react'
// import { withRouter } from "react-router-dom";

import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import { TypeCatergery , TypeSearch} from '../Networks/Usercall'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


export class SearchCompoent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchKey: '',
            typeData: [],
            type:'',
            question:'?',
            posts:[]

        };
        this.fetchDropDownListData = this.fetchDropDownListData.bind(this); 
    };


    onChange = e => {
        const { value } = e.target;
        this.setState({
            searchKey: value
        }, () => (console.log(this.state.searchKey)));

        this.search(value);
        this.fetchDropDownListData();
    };

    search = searchKey => {
        const url = `/api/image_upload/?tag=${searchKey}`;
        const token = {};
        this.token = token;

        fetch(url)
            .then(results => results.json())
            .then(data => {
                if (this.token === token) {
                    this.setState({ people: data.results });
                }
            });
    };

    change = e => {
        // this.props.onChange({ [e.target.name]: e.target.value });
        this.setState({
            [e.target.name]: e.target.value
        }, () => this.fetchDropDownListData, (console.log(this.state.type, 'type')));
    };

    fetchDropDownListData() {
        //  console.log("selected date is: ",this.state.selected_date)
        TypeSearch(this.state.name)
          .then((res) => {
            this.setState({
              posts: res.data,
            });
          });
      }


    componentDidMount() {
        this.search("");


        TypeCatergery()
            .then(res => {
                this.setState({
                    typeData: res.data

                });
                console.log(this.state.typeData, 'data')

            });
    }


    render() {
        const url = `/searchPage/${this.state.searchKey}/${this.state.type}`;
        // const url = `/searchPagetype=${this.state.type},tag=${this.state.searchKey}`;

        return (
            <div>
                <div className="home-search-box">
                    <div className="row search-box-center">
                        <div className="col-md-3">
                            <FormControl className="w-100">
                                <select className="custom-select custom-select-lg filter-buttons"
                                onChange={e => this.change(e)}
                                value={this.state.type}
                                name="type"
                                >
                                    
                                    {/* <option selected>All images</option>
                                    <option value="1">Images</option>
                                    <option value="2">Videos</option>
                                    <option value="3">Icons</option>
                                    <option value="3">Footage</option> */}
                                     <option selected>All images</option>
                                    {this.state.typeData.map(typeData => (
                                        <option key={typeData.name} value={typeData.name}>
                                            {typeData.name}
                                        </option>
                                    ))}
                                </select>

                               

                            </FormControl>
                        </div>
                        <div className="col-md-9">
                            <div className="searchbar-input-field">
                                <span><input type="text" className="input-style-control" value={this.state.searchKey} placeholder="Type here to search" onChange={this.onChange}/></span>
                                <span className="searchbar-search-button"><Link to={url} ><SearchIcon /></Link></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default SearchCompoent
