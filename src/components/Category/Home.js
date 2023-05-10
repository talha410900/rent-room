import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeRoomContent from "../Home/homeRoomContent";
import MapContainer from "../Helper/mapHelper";
import Helper from "../Helper/Helper";

import Categories from "../Home/homeCategories";
import Loader from "../Helper/Loader";
import CategoryStatic2 from "./categoryStatic2";
import HomeExtraContent from "../Home/homeExtraContent";

import LocationPage from "../Home/locationPage";
import Filters from "../Helper/filters";

class CategoryHome extends Helper {
  state = {
    first_block: null,
    mainData: null,
    loading: true,
    second_block: null
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Call api function
    const inputData = {
      api_page_type: this.props.match.params.url_type,
      api_page_type_id: this.props.match.params.id
    };

    this.homePageFirstSection(inputData);
  }

  componentWillReceiveProps(props) {
    this.setState({ loading: true });
    const inputData = {
      api_page_type: props.match.params.url_type,
      api_page_type_id: props.match.params.id
    };

    this.homePageFirstSection(inputData);
  }
  render() {
    let load = new Loader();
    const { loading, mainData, second_block } = this.state;
    return (
      <div className="main">
        <Filters match={this.props.match} props={this.props} />
        <div className="section-spacing">
          <div className="top-bottom-spacing">
            {loading ? (
              load.categoryLoader()
            ) : (
              <Categories
                categoryDetails={this.state.first_block}
                loading={loading}
              />
            )}
            <div className="display-inline">
              {loading
                ? load.propertyLoader()
                : mainData.map((eachData, index) => (
                    <div key={index}>
                      <HomeRoomContent
                        key={index}
                        contentDetails={eachData.data}
                        title={eachData.title}
                        history={this.props.history}
                      />
                      {eachData.data.length > 0 ? (
                        <Link
                          to={`/see_all/${eachData.title}/${
                            eachData.api_page_type_id
                          }/${eachData.api_page_type}`}
                          className="show-all"
                        >
                          show all <i className="fas fa-chevron-right" />
                        </Link>
                      ) : (
                        ""
                      )}
                      {index == 0 ? (
                        <LocationPage locations={second_block} />
                      ) : (
                        ""
                      )}
                      {index == 0 ? <HomeExtraContent /> : ""}
                      {index == 1 ? <CategoryStatic2 /> : ""}
                    </div>
                  ))}

              <div className="subcategory-rightsec">
                <div className="map-sec">
                  {/* <img src="../assets/img/map-img.jpg" className="map-img" /> */}
                  {/* <MapContainer /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CategoryHome;
