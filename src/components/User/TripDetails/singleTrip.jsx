/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import TripBanner from "./tripBanner";
import TripGallery from "./tripGallery";
import TripBookingForm from "./tripBookingForm";
import TripReviewSection from "./tripReviewSection";
import TripHostSection from "./tripHostSection";
import TripSimilarListing from "./tripSimilarListing";
import TripShowAllAmen from "./tripShowAllAmen";
import api from "../../../Environment";
import TripLocation from "./TripLocation";
import renderHTML from "react-render-html";
import Slider from "react-slick";
import Loader from "../../Helper/Loader";
// import { DatePicker, Calendar } from "@y0c/react-datepicker";
// import "@y0c/react-datepicker/assets/styles/calendar.scss";
import { Link } from "react-router-dom";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../../Helper/toaster";
import GetAvailability from "../../Helper/getAvailability";

class SingleTrip extends Component {
  state = {
    singleTripDetails: null,
    loading: true,
    formData: {
      host_id: this.props.match.params.id
    }
  };

  componentDidMount() {
    const formData = {
      host_id: this.props.match.params.id
    };
    this.singleTripViewApiCall(formData);
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    const formData = {
      host_id: nextProps.match.params.id
    };
    // this.setState({ loading: true });
    this.singleTripViewApiCall(formData);
  }

  singleTripViewApiCall(formData) {
    api.postMethod("hosts_view", formData).then(response => {
      if (response.data.success === true) {
        this.setState({
          singleTripDetails: response.data.data,
          loading: false
        });
      } else {
        ToastDemo(this.props.toastManager, response.data.error, "error");
        this.props.history.goBack();
      }
    });
  }

  render() {
    let load = new Loader("");
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    let { singleTripDetails, loading } = this.state;

    return loading ? (
      load.bannerLoader()
    ) : (
      <div className="main-sec-content">
        <TripBanner
          basicDetails={singleTripDetails.basic_details}
          status="user"
        />

        <TripGallery details={singleTripDetails.basic_details} />

        <div className="main">
          <div className="site-content">
            <div className="top-bottom-spacing">
              <div className="row">
                <div className="col-xl-7 col-lg-10 col-md-10 auto-margin">
                  <div id="overview">
                    <div className="media">
                      <div className="media-body mr-3">
                        <a href="#">
                          <p className="red-text txt-overflow">
                            {singleTripDetails.basic_details.location}
                          </p>
                        </a>
                        <h1 className="category-section-head">
                          {singleTripDetails.basic_details.host_name}
                        </h1>
                        <h4 className="captalize section-subhead">
                          {singleTripDetails.basic_details.host_location}
                        </h4>
                      </div>
                      <div>
                        <Link
                          to={`/provider-profile/${singleTripDetails.provider_details.provider_id}`}
                        >
                          <img
                            src={singleTripDetails.provider_details.picture}
                            alt="rentcubo"
                            className="mt-3 rounded-circle review-img"
                          />
                        </Link>
                        <p className="text-center top3 mb-0">
                          <a href="#" className="other-proname">
                            {singleTripDetails.provider_details.provider_name}
                          </a>
                        </p>
                      </div>
                    </div>
                    <ul className="home-requirements">
                      {singleTripDetails.basic_details.section_4.length > 0
                        ? singleTripDetails.basic_details.section_4.map(
                            details => (
                              <li className="">
                                <img
                                  src={details.picture}
                                  alt="rentcubo"
                                  style={{ width: "20px", height: "auto" }}
                                />
                                &nbsp;{details.title}
                              </li>
                            )
                          )
                        : ""}
                    </ul>

                    <h4 className="single-cat-text">
                      {renderHTML(
                        singleTripDetails.basic_details.host_description
                      )}
                    </h4>
                    {localStorage.getItem("userLoginStatus") ? (
                      <Link
                        to={{
                          pathname: "/single-trip/chat",
                          state: {
                            host_details: singleTripDetails.basic_details,
                            provider_details:
                              singleTripDetails.provider_details,
                            pricing_details: singleTripDetails.pricing_details,
                            page: "singletrip"
                          }
                        }}
                      >
                        <h4 className="collapse-head">contact host</h4>
                      </Link>
                    ) : (
                      ""
                    )}
                    <p className="overview-line" />

                    <h4 className="single-cat-text medium-cls ">
                      {singleTripDetails.amenties.title}
                    </h4>
                    <ul className="amenties-list">
                      {singleTripDetails.amenties.data.length > 0 ? (
                        <div>
                          {singleTripDetails.amenties.data[0].answers_data.map(
                            amentie => (
                              <li className="">
                                <img
                                  src={amentie.picture}
                                  className="amentieimg"
                                />
                                &nbsp;{amentie.title}
                              </li>
                            )
                          )}
                          <div className="clearfix" />
                          <a
                            href="#"
                            data-toggle="modal"
                            data-target="#amenities"
                          >
                            <h4 className="amenities-head">
                              show all amenities
                            </h4>
                          </a>

                          <TripShowAllAmen
                            amenties={singleTripDetails.amenties}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </ul>

                    <p className="overview-line" />
                    <h4 className="single-cat-text medium-cls">
                      Sleeping arrangements
                    </h4>
                    {singleTripDetails.arrangements.data.length > 0 ? (
                      <section className="arrangements slider">
                        <Slider {...settings}>
                          {singleTripDetails.arrangements.data.map(
                            arrangement => (
                              <div>
                                <div className="box">
                                  <h3 className="">
                                    <img
                                      src={arrangement.picture}
                                      style={{ width: "24px", height: "16px" }}
                                    />
                                  </h3>
                                  <h4 className="captalize medium-cls top1">
                                    {arrangement.title}
                                  </h4>
                                  <h4 className="captalize">
                                    {arrangement.note}
                                  </h4>
                                </div>
                              </div>
                            )
                          )}
                          <div className="box">
                            <h3 className="">
                              <img
                                src="#"
                                style={{ width: "24px", height: "16px" }}
                              />
                            </h3>
                            <h4 className="captalize medium-cls top1">
                              Bed Room
                            </h4>
                            <h4 className="captalize">Bed Room</h4>
                          </div>
                        </Slider>
                      </section>
                    ) : (
                      ""
                    )}

                    <p className="overview-line" />
                    {singleTripDetails.policies.data.length > 0
                      ? singleTripDetails.policies.data.map(homeDetails => (
                          <div>
                            <h4 className="single-cat-text medium-cls">
                              {homeDetails.title}
                            </h4>
                            <h4 className="rules-text">
                              {renderHTML(homeDetails.description)}
                            </h4>
                            <p className="overview-line" />
                          </div>
                        ))
                      : ""}

                    <h4 className="single-cat-text medium-cls">availability</h4>
                    <h4 className="single-cat-text">
                      <div>
                        <GetAvailability
                          host_id={singleTripDetails.basic_details.host_id}
                        />
                      </div>
                      <span className="medium-cls">1 night</span> minimum stay
                      <span className="dot">
                        <i className="fas fa-circle" />
                      </span>{" "}
                      Updated 1 day ago
                    </h4>
                    <p className="overview-line" />
                  </div>

                  <TripReviewSection
                    details={singleTripDetails.basic_details}
                  />

                  <TripHostSection
                    providerDetails={singleTripDetails.provider_details}
                    singleTripDetails={singleTripDetails}
                  />

                  <TripLocation location={singleTripDetails.basic_details} />
                  <div className="clearfix" />
                </div>
                <TripBookingForm
                  basicDetails={singleTripDetails.basic_details}
                  status="user"
                  providerDetails={singleTripDetails.provider_details}
                  location={this.props.location}
                  history={this.props.history}
                />
              </div>

              <TripSimilarListing
                host_id={singleTripDetails.basic_details.host_id}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withToastManager(SingleTrip);
