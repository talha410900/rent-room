import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helper from "../../Helper/Helper";

class TripHostSection extends Helper {
    state = {};
    render() {
        const { providerDetails, singleTripDetails } = this.props;

        return (
            <div id="host">
                <div className="media">
                    <div className="media-body">
                        <h1 className="section-head host-bottom">
                            Hosted by {providerDetails.provider_name}
                        </h1>
                        <h4 className="host-text">
                            {providerDetails.full_address} Joined in{" "}
                            {providerDetails.joined}
                        </h4>
                        <h4 className="host-text mb-0">
                            <span>
                                {this.starRatingHost(
                                    providerDetails.overall_ratings,
                                    13
                                )}
                            </span>
                        </h4>
                        <h4 className="host-text mb-0">
                            <span>{providerDetails.total_reviews} Reviews</span>
                            &nbsp;&nbsp;
                            {/* <span>
                                <i className="fas fa-male mr-05" />4 References
                            </span> */}
                        </h4>
                    </div>
                    <Link
                        to={`/provider-profile/${providerDetails.provider_id}`}
                        target="_blank"
                    >
                        <img
                            src={providerDetails.picture}
                            alt={providerDetails.provider_name}
                            className="ml-3 rounded-circle review-img"
                        />
                    </Link>
                </div>
                <p className="overview-line" />

                <h4 className="host-text">{providerDetails.description}</h4>

                <div className="host-details">
                    {providerDetails.language
                        ? `
                        <h4>
                            Languages:
                            <span className="medium-cls">
                                {providerDetails.language}
                            </span>
                        </h4>
                        `
                        : ""}
                </div>
                {localStorage.getItem("userLoginStatus") ? (
                    <Link
                        to={{
                            pathname: "/single-trip/chat",
                            state: {
                                host_details: singleTripDetails.basic_details,
                                provider_details:
                                    singleTripDetails.provider_details,
                                pricing_details:
                                    singleTripDetails.pricing_details,
                                page: "singletrip"
                            }
                        }}
                        className="green-outline-btn btn-small"
                    >
                        contact host
                    </Link>
                ) : (
                    ""
                )}

                <p className="overview-line" />
                <h4 className="host-text">
                    <span className="medium-cls">
                        Always communicate through Community Red
                    </span>{" "}
                    <span className="dot">
                        <i className="fas fa-circle" />
                    </span>{" "}
                    To protect your payment, never transfer money or communicate
                    outside of the Community Red website or app.
                </h4>
                <p className="overview-line" />
            </div>
        );
    }
}

export default TripHostSection;
