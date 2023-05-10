import React, { Component } from "react";
import { Link } from "react-router-dom";

const CategoryStatic1 = () => {
    return (
        <div>
            <div className="section-title">
                <h1 className="section-head">Homes for your kind of trip</h1>
                <h4 className="captalize section-subhead">
                    find a top-rated home with amenities you need
                </h4>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <Link to="../category/index.html">
                        <div className="trip-img-sec">
                            <img
                                srcSet="../../../assets/img/family.jpg,
                                          ../../../assets/img/family.jpg 1.5x,
                                          ../../../assets/img/family.jpg 2x"
                                src="../../../assets/img/family.jpg"
                                alt="Static 1"
                                className="trip-img"
                            />
                        </div>
                        <div className="homes-text-sec">
                            <p className="red-text txt-overflow">2000+ homes</p>
                            <h4 className="homes-price1 captalize text-top">
                                find a home that families love. Stretch out and
                                enjoy a space of your own.
                            </h4>
                        </div>
                    </Link>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <Link to="../category/index.html">
                        <div className="trip-img-sec">
                            <img
                                srcSet="../../../assets/img/work.jpg,
                                          ../../../assets/img/work.jpg 1.5x,
                                          ../../../assets/img/work.jpg 2x"
                                src="../../../assets/img/work.jpg"
                                alt="Static 2"
                                className="trip-img"
                            />
                        </div>
                        <div className="homes-text-sec">
                            <p className="red-text txt-overflow">2000+ homes</p>
                            <h4 className="homes-price1 captalize text-top">
                                Book a top-rated home that offers reservation
                                flexibility and work-trip essentials.
                            </h4>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryStatic1;
