import React, { Component } from "react";

import HomeRoomContent from "../Home/homeRoomContent";
import { Link } from "react-router-dom";
import api from "../../Environment";
import Helper from "../Helper/Helper";
import MapContainer from "../Helper/mapHelper";

import Loader from "../Helper/Loader";
import Filters from "../Helper/filters";

class Search extends Helper {
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
  constructor(props) {
    super(props);

    // States and props usage
  }

  componentDidMount() {
    // Call api function

    if (this.props.location.state) {
      this.setState({ loading: false });
    } else {
      this.props.history.goBack();
    }
  }

  toggleMap = map => {
    this.setState({ map: map });
  };

  render() {
    let load = new Loader();
    const { loading, loadingStatus, loadingContent } = this.state;
    if (loading) {
      return load.propertyLoader();
    } else {
      const searchResult = this.props.location.state;

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
                      contentDetails={searchResult[0].data}
                      title={searchResult[0].title}
                      history={this.props.history}
                    />
                  )}
                </div>
                {this.state.map ? (
                  <div className="col-4">
                    <div className="map-sec">
                      {searchResult[0].data &&
                      searchResult[0].data.length > 0 ? (
                        <MapContainer data={searchResult[0].data} />
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
              ) : searchResult[0].data.length > 0 ? (
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
}
export default Search;
