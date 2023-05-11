import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helper from "./Helper";
import api from "../../Environment";

class SearchForm extends Helper {
  state = {
    categories: null,
    loadingCategory: true,
    searchDisplay: true,
    loadingSearch: true,
    searchResult: null,
    location_id: null
  };
  componentDidMount() {
    this.getCategory();
  }
  searchOnChange = ({ currentTarget: input }) => {
    this.setState({ searchDisplay: false });
    if (input.value == "") {
      this.setState({ searchDisplay: true });
    }
    api
      .postMethod("filter_locations", { location: input.value })
      .then(response => {
        if (response.data.success) {
          this.setState({
            searchResult: response.data.data,
            loadingSearch: false
          });
        }
      });
  };

  searchResult = event => {
    event.preventDefault();
    let location_id;
    if (this.state.searchResult.length > 0) {
      location_id = this.state.searchResult[0].service_location_id;
    } else {
      location_id = "";
    }
    this.setState({ searchDisplay: true });
    this.searchApiCall(this.props.props, location_id);
  };

  searchOnClickResult = (event, search) => {
    event.preventDefault();
    this.setState({ searchDisplay: true });
    this.searchApiCall(this.props.props, search.service_location_id);
  };

  handleChangeLocation = ({ currentTarget: input }) => {
    this.setState({ location_id: input.value });
  };
  render() {
    const {
      loadingCategory,
      searchDisplay,
      searchResult,
      loadingSearch
    } = this.state;
    return (
      <form
        className="form-inline justify-content-start"
        onSubmit={this.searchResult}
      >
        <div className="input-group dropdown">
          <div className="input-group-append">
            <span className="input-group-text" id="basic-addon">
              <i className="fas fa-search" />
            </span>
          </div>
          <input
            type="text"
            className="form-control form-control-lg dropdown-toggle"
            data-toggle="dropdown"
            placeholder="try 'london'"
            name="search"
            onChange={this.searchOnChange}
          />

          <div className="dropdown-menu nav-dropdown-menu">
            <h5 className="dropdown-title">explore Community Red</h5>
            <Link to="/home" className="grey-outline-btn size1">
              all
            </Link>

            {loadingCategory
              ? "Loading.."
              : this.renderCategory("grey-outline-btn size1")}
          </div>
          <div
            className={
              searchDisplay
                ? "dropdown-menu nav-dropdown-menu "
                : "dropdown-menu nav-dropdown-menu show"
            }
          >
            <ul className="map-search-list">
              {loadingSearch
                ? "Loading..."
                : searchResult.length > 0
                  ? searchResult.map(search => (
                    <li key={search.service_location_id}>
                      <Link
                        to="#"
                        className="map-search-list-link"
                        onClick={event =>
                          this.searchOnClickResult(event, search)
                        }
                      >
                        <i className="fas fa-map-marker-alt" />{" "}
                        {search.service_location_name}
                      </Link>
                    </li>
                  ))
                  : "No Data Found"}
            </ul>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;
