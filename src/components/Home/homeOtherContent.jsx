import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeOtherContent extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="">
          <div className="section-title">
            <h1 className="section-head">Experiences in the spotlight</h1>
          </div>
          <div className="row">
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <Link to="category/index.html">
                <div className="homes-img-sec">
                  <img
                    srcSet="../../../assets/img/1.jpg,
                                                    ../../../assets/img/1.jpg 1.5x,
                                                    ../../../assets/img/1.jpg 2x"
                    src="../../../assets/img/1.jpg"
                    alt="Experiences-1"
                    className="homes-img"
                  />
                </div>
                <div className="homes-text-sec">
                  <p className="red-text txt-overflow">
                    100+ surfing experinces
                  </p>
                  <h4 className="homes-title txt-overflow">Catch Link wave</h4>
                  <h5 className="homes-price txt-overflow-2line">
                    We've teamed up with the World Surf League to offer surfing
                    experiences around the world.
                  </h5>
                </div>
              </Link>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <Link to="category/index.html">
                <div className="homes-img-sec">
                  <img
                    srcSet="../../../assets/img/2.jpg,
                                                    ../../../assets/img/2.jpg 1.5x,
                                                    ../../../assets/img/2.jpg 2x"
                    src="../../../assets/img/2.jpg"
                    alt="Experiences-2"
                    className="homes-img"
                  />
                </div>
                <div className="homes-text-sec">
                  <p className="red-text txt-overflow">6+ concerts </p>
                  <h4 className="homes-title txt-overflow">
                    Introducing Community Red Concerts
                  </h4>
                  <h5 className="homes-price txt-overflow-2line">
                    Discover Link new way to experience live music, with
                    intimate shows in unique spaces.
                  </h5>
                </div>
              </Link>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
              <Link to="category/index.html">
                <div className="homes-img-sec">
                  <img
                    srcSet="../../../assets/img/3.jpg,
                                                    ../../../assets/img/3.jpg 1.5x,
                                                    ../../../assets/img/3.jpg 2x"
                    src="../../../assets/img/3.jpg"
                    alt="Experiences-3"
                    className="homes-img"
                  />
                </div>
                <div className="homes-text-sec">
                  <p className="red-text txt-overflow">200+ experinces</p>
                  <h4 className="homes-title txt-overflow">
                    Social Impact Experiences
                  </h4>
                  <h5 className="homes-price txt-overflow-2line">
                    Try something new while supporting Link cause. 100% of what
                    you pay goes to the nonprofit.
                  </h5>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="section-title">
            <h1 className="section-head">
              Community Red Plus homes around the world
            </h1>
            <h4 className="captalize section-subhead">
              Browse Link new selection of homes verified for quality & comfort
            </h4>
          </div>
          <section className="regular slider">
            <div>
              <Link to="category/sub-category.html">
                <div className="slider-img-sec">
                  <img
                    srcSet="../../../assets/img/slider1.jpg,
                                                    ../../../assets/img/slider1.jpg 1.5x,
                                                    ../../../assets/img/slider1.jpg 2x"
                    src="../../../assets/img/slider1.jpg"
                    alt="Experiences-4"
                    className="homes-img"
                  />
                  <div className="slider-sec-text">
                    <h3 className="slider-img-text">Homes in Los Angeles</h3>
                  </div>
                </div>
                <div className="homes-text-sec">
                  <p className="red-text txt-overflow">100+ verified homes</p>
                  <h5 className="homes-price txt-overflow-2line">
                    Movie stars and starlit beaches—yours to find from homes
                    verified for quality and comfort.
                  </h5>
                </div>
              </Link>
            </div>
            <div>
              <Link to="category/sub-category.html">
                <div className="slider-img-sec">
                  <img
                    srcSet="../../../assets/img/slider2.jpg,
                                                    ../../../assets/img/slider2.jpg 1.5x,
                                                    ../../../assets/img/slider2.jpg 2x"
                    src="../../../assets/img/slider2.jpg"
                    alt="Experiences-4"
                    className="homes-img"
                  />
                  <div className="slider-sec-text">
                    <h3 className="slider-img-text">Homes in London</h3>
                  </div>
                </div>
                <div className="homes-text-sec">
                  <p className="red-text txt-overflow">40+ verified homes</p>
                  <h5 className="homes-price txt-overflow-2line">
                    Steep streets and stellar views—yours to find from homes
                    verified for quality and comfort.
                  </h5>
                </div>
              </Link>
            </div>
            <div>
              <Link to="category/sub-category.html">
                <div className="slider-img-sec">
                  <img
                    srcSet="../../../assets/img/slider3.jpg,
                                                    ../../../assets/img/slider3.jpg 1.5x,
                                                    ../../../assets/img/slider3.jpg 2x"
                    src="../../../assets/img/slider3.jpg"
                    alt="Experiences-4"
                    className="homes-img"
                  />
                  <div className="slider-sec-text">
                    <h3 className="slider-img-text">Homes in Toronto</h3>
                  </div>
                </div>
                <div className="homes-text-sec">
                  <p className="red-text txt-overflow">80+ verified homes</p>
                  <h5 className="homes-price txt-overflow-2line">
                    Lake views and iconic towers—yours to behold from homes
                    verified for quality and comfort.
                  </h5>
                </div>
              </Link>
            </div>
            <div>
              <Link to="category/sub-category.html">
                <div className="slider-img-sec">
                  <img
                    srcSet="../../../assets/img/slider4.jpg,
                                                    ../../../assets/img/slider4.jpg 1.5x,
                                                    ../../../assets/img/slider4.jpg 2x"
                    src="../../../assets/img/slider4.jpg"
                    alt="Experiences-4"
                    className="homes-img"
                  />
                  <div className="slider-sec-text">
                    <h3 className="slider-img-text">Homes in Sydney</h3>
                  </div>
                </div>
                <div className="homes-text-sec">
                  <p className="red-text txt-overflow">100+ verified homes</p>
                  <h5 className="homes-price txt-overflow-2line">
                    Beaches and bushland—yours to explore from homes verified
                    for quality and comfort.
                  </h5>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default HomeOtherContent;
