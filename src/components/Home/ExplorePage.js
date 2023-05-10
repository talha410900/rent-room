import React, { Component } from "react";
import Categories from "./homeCategories";
import HomeRoomContent from "./homeRoomContent";
import HomeFrontStaticContent from "./homeFrontStaticContent";
import HomeExtraContent from "./homeExtraContent";
import HomeLastContent from "./homeLastcontent";
import Helper from "../Helper/Helper";
import Loader from "../Helper/Loader";
import { Link } from "react-router-dom";

import LocationPage from "./locationPage";

class ExplorePage extends Helper {
  state = {
    first_block: null,
    mainData: null,
    loading: true,
    second_block: null
  };
  constructor(props) {
    super(props);

    // States and props usage
  }

  componentDidMount() {
    // Call api function
    let inputData = {
      api_page_type: "HOME"
    };
    this.homePageFirstSection(inputData);
  }

  render() {
    let load = new Loader();
    const { loading, mainData, second_block } = this.state;
    return (
      <div className="main">
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
            <HomeFrontStaticContent />

            {loading
              ? load.propertyLoader()
              : mainData.map((eachData, index) => (
                  <div key={index}>
                    <HomeRoomContent
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
                    {index == 1 ? <HomeExtraContent /> : ""}
                  </div>
                ))}

            {/* <HomeOtherContent /> */}
            <HomeLastContent />
          </div>
        </div>
      </div>
    );
  }
}

export default ExplorePage;
