import React, { Component } from "react";
import Categories from "./homeCategories";
import HomeRoomContent from "./homeRoomContent";
import HomeMainBanner from "./homeMainBanner";
import HomeFrontStaticContent from "./homeFrontStaticContent";
import HomeExtraContent from "./homeExtraContent";
import HomeLastContent from "./homeLastcontent";
import Helper from "../Helper/Helper";
import Loader from "../Helper/Loader";
import ToastDemo from "../Helper/toaster";
import { withToastManager } from "react-toast-notifications";
import { Link } from "react-router-dom";
import HomeOtherContent from "./homeOtherContent";
import LocationPage from "./locationPage";

class LandingPage extends Helper {
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
    if (this.props.location.state != null) {
      ToastDemo(
        this.props.toastManager,
        this.props.location.state.error,
        "error"
      );
    }
  }

  render() {
    let load = new Loader();
    const { loading, mainData, second_block } = this.state;
    return (
      <div className="main-sec-content">
        {loading ? (
          load.bannerLoader()
        ) : (
          <HomeMainBanner {...this.state.first_block} props={this.props} />
        )}
        <div className="main">
          <div className="site-content">
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
                        to={`/see_all/${eachData.title}/${eachData.api_page_type_id}/${eachData.api_page_type}`}
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
      </div>
    );
  }
}

export default withToastManager(LandingPage);
