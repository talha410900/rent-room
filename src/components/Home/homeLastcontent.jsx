import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeLastContent extends Component {
    state = {};
    render() {
        return (
            <div>
                <div className="find-out-more">
                    <div className="row">
                        <div className="col-sm-5 col-md-5 col-lg-4 col-xl-4">
                            <div className="find-img-sec">
                                <img
                                    srcSet="../../../assets/img/find.jpg,
                                                ../../../assets/img/find.jpg 1.5x,
                                                ../../../assets/img/find.jpg 2x"
                                    src="../../../assets/img/find.jpg"
                                    alt="Other Find"
                                    className="homes-img"
                                />
                            </div>
                        </div>
                        <div className="col-sm-7 col-md-7 col-lg-8 col-xl-8 find-text-sec">
                            <div className="">
                                <h1 className="find-head captalize">
                                    find out how much you could earn hosting
                                    your place
                                </h1>
                                <h4 className="captalize find-subhead">
                                    turn your extra space into extra income.
                                </h4>
                                <Link to="#" className="green-btn btn-small">
                                    find out more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeLastContent;
