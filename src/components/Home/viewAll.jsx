import React, { Component } from "react";

import HomeRoomContent from "../Home/homeRoomContent";
import { Link } from "react-router-dom";
import api from "../../Environment";
import Helper from "../Helper/Helper";
import MapContainer from "../Helper/mapHelper";

import Loader from "../Helper/Loader";
import Filters from "../Helper/filters";

class ViewAll extends Helper {
  state = {
    first_block: null,
    mainData: null,
    loading: true,
    skipCount: 0,
    loadingStatus: true,
    loadingContent: null,
    contentData: null,
    map: true
  };

  componentDidMount() {
    // Call api function
    const inputData = {
      api_page_type: this.props.match.params.url_type,
      api_page_type_id: this.props.match.params.id,
      skip: this.state.skipCount
    };

    this.seeAll(inputData);
  }

  componentWillReceiveProps(props) {
    this.setState({ loading: true });
    const inputData = {
      api_page_type: props.match.params.url_type,
      api_page_type_id: props.match.params.id,
      skip: this.state.skipCount
    };

    this.seeAll(inputData);
  }

  loadMore = event => {
    event.preventDefault();
    this.setState({ loadingStatus: false, loadingContent: "Loading..." });
    const inputData = {
      api_page_type: this.props.match.params.url_type,
      api_page_type_id: this.props.match.params.id,
      skip: this.state.skipCount
    };

    this.seeAll(inputData);
  };

  toggleMap = map => {
    this.setState({ map: map });
  };

  render() {
    let load = new Loader();
    const { loading, loadingStatus, loadingContent } = this.state;
    return (
      <div className="main">
        <Filters
          toggleMap={this.toggleMap}
          match={this.props.match}
          props={this.props}
        />
        <div className="section-spacing">
          <div className="">
            <div className="row">
              <div className={this.state.map ? "col-8" : "col-12"}>
                {loading ? (
                  load.propertyLoader()
                ) : (
                  <HomeRoomContent
                    contentDetails={this.state.contentData}
                    title={this.state.mainData[0].title}
                    history={this.props.history}
                  />
                )}
              </div>
              {this.state.map ? (
                <div className="col-4">
                  <div className="map-sec">
                    {this.state.contentData &&
                    this.state.contentData.length > 0 ? (
                      <MapContainer data={this.state.contentData} />
                    ) : (
                      false
                    )}
                  </div>
                </div>
              ) : (
                false
              )}
            </div>
            {loadingStatus ? "" : loadingContent}
            {loading ? (
              ""
            ) : this.state.contentData.length > 0 ? (
              <Link to="#" className="show-all" onClick={this.loadMore}>
                show more
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default ViewAll;
