import React, { Component } from "react";
import Slider from "react-slick";
import api from "../../../Environment";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Helper from "../../Helper/Helper";

class TripSimilarListing extends Helper {
  state = {
    suggestions: {},
    loading: true
  };
  componentDidMount() {
    api
      .postMethod("suggestions", { host_id: this.props.host_id })
      .then(response => {
        this.setState({
          suggestions: response.data.data,
          loading: false
        });
      });
  }
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true
    };
    const { loading, suggestions } = this.state;
    return (
      <div className="subcategory-leftsec">
        <div className="section-title">
          <h1 className="section-head">Similar listing</h1>
        </div>

        <div className="row">
          {loading
            ? ""
            : suggestions.length > 0
            ? suggestions.map(data => (
                <div className="subcategory-card" key={data.host_id}>
                  <div className="relative">
                    <section className="home-slider slider">
                      <Carousel
                        showThumbs={false}
                        infiniteLoop={true}
                        showStatus={false}
                      >
                        {data.gallery.map(image => (
                          <div key={image.picture} className="homes-img-sec1">
                            <img
                              srcSet={image.picture}
                              src={image.picture}
                              alt="Loading..."
                              className="homes-img"
                            />
                          </div>
                        ))}
                      </Carousel>
                    </section>
                  </div>
                  <Link to={`/trip/${data.host_id}`}>
                    <div className="homes-text-sec">
                      <p className="red-text txt-overflow">
                        {data.host_location}{" "}
                        <span className="room-content-dot">
                          <i className="fas fa-circle" />
                        </span>{" "}
                        {data.sub_category_name}
                      </p>
                      <h4 className="homes-title txt-overflow">
                        {data.host_name}
                      </h4>
                      <h5 className="homes-price txt-overflow">
                        <span>
                          {data.per_day_formatted} {data.per_day_symbol}
                        </span>
                      </h5>
                      <h5 className="rating-sec">
                        <span className="rating-star">
                          {this.starRatingHost(data.overall_ratings)}
                        </span>
                        <span>&nbsp;({data.total_ratings})</span>
                      </h5>
                    </div>
                  </Link>
                </div>
              ))
            : "No suggesstion"}
        </div>
      </div>
    );
  }
}

export default TripSimilarListing;
