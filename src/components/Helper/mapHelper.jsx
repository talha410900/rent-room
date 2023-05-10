import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker, Map } from "google-maps-react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Helper from "./Helper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Helper {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    content: {},
    loading: true,
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      loading: false,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        loading: true,
      });
    }
  };

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };
    const data = "";
    const price = "234";
    const rate = "as";
    const { loading } = this.state;

    return (
      <Map
        google={this.props.google}
        zoom={12}
        style={mapStyles}
        initialCenter={{
          lat: this.props.data[0].latitude,
          lng: this.props.data[0].longitude,
        }}
      >
        {this.props.data.map((content) => (
          <Marker
            onClick={this.onMarkerClick}
            name={content.host_name}
            title={content.host_name}
            content={content}
            label={{
              text: content.per_day_formatted,
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
            }}
            icon={{
              url: window.location.origin + "/assets/mapicons/black-map.svg",
            }}
            // icon={{
            //   url:
            //     'data:image/svg+xml;utf-8, \
            //               <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> \
            //               <g fill-rule="evenodd"> \
            //       <text font-size="8.276" font-weight="bold"> \
            //           <tspan x="4" y="13"> \
            //           </tspan> \
            //       </text> \
            //       <text font-size="8.276" font-weight="bold">\
            //           <tspan x=".37" y="8"></tspan>\
            //       </text>\
            //   </g>\
            //               </svg>'
            // }}
            position={{
              lat: content.latitude,
              lng: content.longitude,
            }}
          />
        ))}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          {loading ? (
            ""
          ) : (
            <div className="row">
              <div className="subcategory-card">
                <div className="relative">
                  <section className="">
                    <Slider {...settings}>
                      <div>
                        <div className="homes-img-sec1">
                          <img
                            src={this.state.activeMarker.content.host_picture}
                            alt={this.state.activeMarker.content.host_name}
                            className="homes-img"
                          />
                        </div>
                      </div>
                    </Slider>
                  </section>
                </div>

                <a href={`/trip/${this.state.activeMarker.content.host_id}`}>
                  <div className="homes-text-sec">
                    <p className="red-text">
                      {this.state.activeMarker.content.host_location}{" "}
                      <span className="room-content-dot">
                        <i className="fas fa-circle" />
                      </span>{" "}
                      {this.state.activeMarker.content.sub_category_name}
                    </p>
                    <h4 className="homes-title">
                      {this.state.activeMarker.content.host_name}
                    </h4>
                    <h5 className="homes-price ">
                      <span>
                        {this.state.activeMarker.content.per_day_formatted}{" "}
                        {this.state.activeMarker.content.per_day_symbol}
                      </span>{" "}
                    </h5>
                    <h5 className="rating-sec">
                      <span className="rating-star">
                        {this.starRatingHost(
                          this.state.activeMarker.overall_ratings,
                          12
                        )}
                      </span>
                      <span>
                        &nbsp;(
                        {this.state.activeMarker.content.total_ratings})
                      </span>
                    </h5>
                  </div>
                </a>
              </div>

              {/* <div className="subcategory-card">
                <div className="relative">
                  <section className="">
                    <Carousel
                      showThumbs={false}
                      infiniteLoop={true}
                      showStatus={false}
                    >
                      {this.state.activeMarker.content.gallery.map(image => (
                        <div key={image.picture} className="homes-img-sec1">
                          <img
                            srcSet={image.picture}
                            src={image.picture}
                            alt="Hello"
                            className="homes-img"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </section>
                </div>
                <a to={`/trip/${this.state.activeMarker.content.host_id}`}>
                  <div className="homes-text-sec">
                    <p className="red-text txt-overflow">
                      {this.state.activeMarker.content.host_location}{" "}
                      <span className="room-content-dot">
                        <i className="fas fa-circle" />
                      </span>{" "}
                      {this.state.activeMarker.content.sub_category_name}
                    </p>
                    <h4 className="homes-title txt-overflow">
                      {this.state.activeMarker.content.host_name}
                    </h4>
                    <h5 className="homes-price txt-overflow">
                      <span>
                        {this.state.activeMarker.content.per_day_formatted}{" "}
                        {this.state.activeMarker.content.per_day_symbol}
                      </span>
                    </h5>
                    <h5 className="rating-sec">
                      <span className="rating-star">
                        {this.starRatingHost(
                          this.state.activeMarker.content.overall_ratings
                        )}
                      </span>
                      <span>
                        &nbsp;({this.state.activeMarker.content.total_ratings})
                      </span>
                    </h5>
                  </div>
                </a>
              </div>
             */}
            </div>
          )}
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDsIG8XXKNR2B1pklpLlbx1cXh0GI7k76E",
})(MapContainer);
