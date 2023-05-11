import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeExtraContent extends Component {
    state = {};
    render() {
        return (
            <div>
                <div className="section-title">
                    <h1 className="section-head">
                        Housing for everyone, Nationwide
                    </h1>
                    {/* <h4 className="captalize section-subhead">
                        find Link top-rated home with amenities you need
                    </h4> */}
                </div>

                <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Link to="category/index.html">
                            <div className="trip-img-sec">
                                <img
                                    srcSet="../../../assets/img/family.jpg,
                                                    ../../../assets/img/family.jpg 1.5x,
                                                    ../../../assets/img/family.jpg 2x"
                                    src="../../../assets/img/family.jpg"
                                    alt="Family"
                                    className="trip-img"
                                />
                            </div>
                            <div className="homes-text-sec">
                                <p className="red-text txt-overflow">
                                    2000+ homes
                                </p>
                                <h4 className="homes-price1 captalize text-top">
                                    find Link home that families love. Stretch
                                    out and enjoy Link space of your own.
                                </h4>
                            </div>
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <Link to="category/index.html">
                            <div className="trip-img-sec">
                                <img
                                    srcSet="../../../assets/img/work.jpg,
                                                    ../../../assets/img/work.jpg 1.5x,
                                                    ../../../assets/img/work.jpg 2x"
                                    src="../../../assets/img/work.jpg"
                                    alt="Plus Work"
                                    className="trip-img"
                                />
                            </div>
                            <div className="homes-text-sec">
                                <p className="red-text txt-overflow">
                                    2000+ homes
                                </p>
                                <h4 className="homes-price1 captalize text-top">
                                    Book Link top-rated home that offers
                                    reservation flexibility and work-trip
                                    essentials.
                                </h4>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeExtraContent;
