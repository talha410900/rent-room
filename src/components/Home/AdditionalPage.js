import React, { Component } from "react";

import { Link } from "react-router-dom";

class AdditionalPage extends Component {
  constructor(props) {
    super(props);

    // States and props usage
  }

  componentDidMount() {
    // Call api function
  }

  render() {
    return (
      <div className="main-sec-content">
        <div
          style={{ backgroundImage: `url('../../../assets/img/banner2.jpg')` }}
          className="banner-img1"
        >
          <div className="banner-overlay1">
            <div className="site-content">
              <div className="banner-text">
                <div className="row">
                  <div className="col-sm-12 col-md-8 col-lg-7 col-xl-7">
                    <h1>Make every work trip unforgettable</h1>
                    <h3>
                      Work trips don’t have to be boring — make them
                      extraordinary with RentRoom.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <div className="site-content">
            <div className="top-bottom-spacing1">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-5">
                  <div className="white-bg p-4 shadow1">
                    <div className="wishlist-img-sec m-0">
                      <img
                        srcSet="../../../assets/img/home1.jpg,
                                                ../../../assets/img/home1.jpg 1.5x,
                                                ../../../assets/img/home1.jpg 2x"
                        src="../../../assets/img/home1.jpg"
                        alt="Loft"
                        className="homes-img"
                      />
                    </div>
                    <h4 className="captalize medium-cls top">
                      Loft overlooking downtown
                    </h4>
                    <h5 className="captalize">
                      <span className="theme-green-clr">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </span>
                      43 Reviews
                    </h5>
                  </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 offset-xl-1">
                  <h1 className="subpage-head mt-3">
                    Homes perfect for work travel
                  </h1>
                  <h4 className="section-subhead lh-1-4 top">
                    Whether you’re flying solo or in a group, you can choose
                    from homes that have everything you need to do your best
                    work.
                  </h4>
                  <div className="media top2">
                    <img
                      src="../../../assets/img/check.svg"
                      alt="John Doe"
                      className="mr-3 check-img"
                    />
                    <div className="media-body">
                      <h4 className="sub-page-list">Wifi and a workspace</h4>
                    </div>
                  </div>
                  <div className="media top2">
                    <img
                      src="../../../assets/img/check.svg"
                      alt="John Doe"
                      className="mr-3 check-img"
                    />
                    <div className="media-body">
                      <h4 className="sub-page-list">
                        Flexible cancellation policies
                      </h4>
                    </div>
                  </div>
                  <div className="media top2">
                    <img
                      src="../../../assets/img/check.svg"
                      alt="John Doe"
                      className="mr-3 check-img"
                    />
                    <div className="media-body">
                      <h4 className="sub-page-list">Self check-in</h4>
                    </div>
                  </div>
                  <div className="top2">
                    <a href="#" className="find-homes">
                      see work friendly homes{" "}
                      <i className="fas fa-chevron-right align-middle" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="line m-0" />
            <div className="top-bottom-spacing1">
              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-5">
                  <div className="sub-page-div">
                    <div>
                      <h1 className="subpage-head">
                        Homes perfect for work travel
                      </h1>
                      <h4 className="section-subhead top lh-1-4">
                        Whether you’re flying solo or in a group, you can choose
                        from homes that have everything you need to do your best
                        work.
                      </h4>
                      <div className="top2">
                        <a href="#" className="find-homes">
                          learn how to enroll your company{" "}
                          <i className="fas fa-chevron-right align-middle" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 text-center offset-xl-1">
                  <img
                    src="../../../assets/img/mobile.png"
                    className="mobile-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="top-bottom-spacing1 grey-bg text-center">
            <div className="site-content">
              <h1 className="subpage-head">Discover homes around the world</h1>
              <h4 className="section-subhead bottom top lh-1-4">
                Enter your email and find out why RentRoom is the best way to
                travel for work.
              </h4>
              <div className="subpage-signin-sec">
                <form className="form-inline">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="add your work email"
                  />
                  <button className="green-btn" type="submit">
                    sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdditionalPage;
