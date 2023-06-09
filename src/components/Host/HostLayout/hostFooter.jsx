import React, { Component } from "react";
import api from "../../../Environment";

import { Link } from "react-router-dom";

import configuration from "react-global-configuration";

class HostFooter extends Component {
    state = {
        footer_first_section: [],
        footer_second_section: [],
        footer_third_section: [],
        footer_fourth_section: []
    };
    constructor(props) {
        super(props);

        // States and props usage
    }

    componentDidMount() {
        // Call api function

        if (configuration.get("configData.footer_first_section")) {
            this.setState({
                footer_first_section: configuration.get(
                    "configData.footer_first_section"
                )
            });
        }

        if (configuration.get("configData.footer_second_section")) {
            this.setState({
                footer_second_section: configuration.get(
                    "configData.footer_second_section"
                )
            });
        }

        if (configuration.get("configData.footer_third_section")) {
            this.setState({
                footer_third_section: configuration.get(
                    "configData.footer_third_section"
                )
            });
        }

        if (configuration.get("configData.footer_fourth_section")) {
            this.setState({
                footer_fourth_section: configuration.get(
                    "configData.footer_fourth_section"
                )
            });
        }
    }

    render() {
        return (
            <div>
                <div className="footer-height" />
                <div className="footer">
                    <div className="site-content">
                        <div className="home-footer-section  top-bottom-spacing">
                            <div className="row m-0">
                                <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 p-0">
                                    <div>
                                        <h5 className="bold-cls m-0 captalize">
                                            Community Red
                                        </h5>
                                        <ul className="footer-listings">
                                            {this.state.footer_first_section
                                                .length > 0
                                                ? this.state.footer_first_section.map(
                                                    (
                                                        first_static_page,
                                                        index_first
                                                    ) => (
                                                        <li>
                                                            <Link
                                                                to={`/page/${first_static_page.unique_id}`}
                                                                target="_blank"
                                                                key={
                                                                    first_static_page.unique_id
                                                                }
                                                            >
                                                                Community Red
                                                            </Link>
                                                        </li>
                                                    )
                                                )
                                                : ""}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 p-0">
                                    <div>
                                        <h5 className="bold-cls m-0 captalize">
                                            Discover
                                        </h5>
                                        <ul className="footer-listings">
                                            {this.state.footer_second_section
                                                .length > 0
                                                ? this.state.footer_second_section.map(
                                                    (
                                                        static_page,
                                                        index_second
                                                    ) => (
                                                        <li>
                                                            <Link
                                                                to={`/page/${static_page.unique_id}`}
                                                                target="_blank"
                                                                key={
                                                                    static_page.unique_id
                                                                }
                                                            >
                                                                {
                                                                    static_page.title
                                                                }
                                                            </Link>
                                                        </li>
                                                    )
                                                )
                                                : ""}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 p-0">
                                    <div>
                                        <h5 className="bold-cls m-0 captalize">
                                            Hosting
                                        </h5>
                                        <ul className="footer-listings">
                                            {this.state.footer_third_section
                                                .length > 0
                                                ? this.state.footer_third_section.map(
                                                    (
                                                        static_page,
                                                        index_third
                                                    ) => (
                                                        <li>
                                                            <Link
                                                                to={`/page/${static_page.unique_id}`}
                                                                target="_blank"
                                                                key={`third-${index_third}`}
                                                            >
                                                                {
                                                                    static_page.title
                                                                }
                                                            </Link>
                                                        </li>
                                                    )
                                                )
                                                : ""}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 p-0">
                                    <div>
                                        <h5 className="m-0 footer-icons">
                                            {configuration.get(
                                                "configData.facebook_link"
                                            ) ? (
                                                <span>
                                                    <a
                                                        target="_blank"
                                                        href={configuration.get(
                                                            "configData.facebook_link"
                                                        )}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-facebook-f" />
                                                    </a>
                                                </span>
                                            ) : (
                                                ""
                                            )}
                                            {configuration.get(
                                                "configData.twitter_link"
                                            ) ? (
                                                <span>
                                                    <a
                                                        target="_blank"
                                                        href={configuration.get(
                                                            "configData.twitter_link"
                                                        )}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-twitter" />
                                                    </a>
                                                </span>
                                            ) : (
                                                ""
                                            )}
                                            <span>
                                                {configuration.get(
                                                    "configData.instagram_link"
                                                ) ? (
                                                    <a
                                                        target="_blank"
                                                        href={configuration.get(
                                                            "configData.instagram_link"
                                                        )}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-instagram" />
                                                    </a>
                                                ) : (
                                                    ""
                                                )}
                                                {configuration.get(
                                                    "configData.linkedin_link"
                                                ) ? (
                                                    <a
                                                        target="_blank"
                                                        href={configuration.get(
                                                            "configData.linkedin_link"
                                                        )}
                                                        rel="noopener noreferrer"
                                                    >
                                                        <i className="fab fa-linkedin" />
                                                    </a>
                                                ) : (
                                                    ""
                                                )}
                                            </span>
                                        </h5>
                                        <ul className="footer-listings">
                                            {this.state.footer_fourth_section
                                                .length > 0
                                                ? this.state.footer_fourth_section.map(
                                                    (static_page, index) => (
                                                        <li>
                                                            <Link
                                                                key={
                                                                    static_page.unique_id
                                                                }
                                                                to={`/page/${static_page.unique_id}`}
                                                                target="_blank"
                                                            >
                                                                {
                                                                    static_page.title
                                                                }
                                                            </Link>
                                                        </li>
                                                    )
                                                )
                                                : ""}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <p className="overview-line" />
                            <h5 className="captalize m-0">
                                <i className="far fa-copyright small1" />{" "}
                                Community Red
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HostFooter;
