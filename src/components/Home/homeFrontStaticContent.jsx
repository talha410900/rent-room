import React, { Component } from "react";

import { Link } from "react-router-dom";

class HomeFrontStaticContent extends Component {
    state = {};
    render() {
        return (
            <div>
                <div className="section-title">
                    <h1 className="section-head">introducing Community Red plus</h1>
                </div>
                <div className="add-img-sec">
                    <img
                        srcSet="../../../assets/img/add1.jpg,
                                                ../../../assets/img/add1.jpg 1.5x,
                                                ../../../assets/img/add1.jpg 2x"
                        src="../../../assets/img/add1.jpg"
                        alt="introducing"
                        className="add-img"
                    />
                    <div className="add-text">
                        <h3 className="captalize">
                            A new selection of homes verified for quality &
                            comfort.
                        </h3>
                        <div>
                            <Link to="#" className="white-btn banner-white-btn">
                                explore Community Red plus homes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeFrontStaticContent;
