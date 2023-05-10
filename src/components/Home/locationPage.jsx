import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

class LocationPage extends Component {
    state = {};
    render() {
        var settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            adaptiveHeight: true
        };
        const { length: count } = this.props.locations;
        const { locations } = this.props;

        if (count === 0) {
            return <p />;
        }

        return (
            <div>
                <div className="section-title">
                    <h1 className="section-head">{locations.title}</h1>
                </div>
                <section className="recom-slider slider">
                    <Slider {...settings} className="">
                        {locations.data.map(location => (
                            <div
                                className="recom-box-outer"
                                key={location.service_location_id}
                            >
                                <Link
                                    to={`/category/${location.service_location_name}/${location.api_page_type_id}/${locations.api_page_type}`}
                                    className="recom-box"
                                >
                                    <div className="recom-img">
                                        <img
                                            src={
                                                location.service_location_picture
                                            }
                                            alt={location.service_location_name}
                                        />
                                    </div>
                                    <div className="recom-overlay" />
                                    <div className="recom-content">
                                        <h5>
                                            {location.service_location_name}
                                        </h5>
                                        <p>$100/ Night Average</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <div className="recom-box-outer">
                            <a href="#" className="recom-box">
                                <div className="recom-img">
                                    <img
                                        src={
                                            window.location.origin +
                                            "assets/img/recom1.webp"
                                        }
                                    />
                                </div>
                                <div className="recom-overlay" />
                                <div className="recom-content">
                                    <h5>Paris</h5>
                                    <p>$100/ Night Average</p>
                                </div>
                            </a>
                        </div>
                    </Slider>
                </section>
            </div>
        );
    }
}

export default LocationPage;
