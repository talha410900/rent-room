import React, { Component } from "react";

import { Link } from "react-router-dom";

import HostHelper from "../../Helper/hostHelper";

import configuartion from "react-global-configuration";
import logo from "../../../assets/logo.png"
class HostAuthHeader extends HostHelper {
    constructor(props) {
        super(props);
    }

    state = {
        categories: null,
        data: {},
        loadingCategories: true
    };

    componentDidMount() {
        // Call api function
        this.getCategories();
    }

    render() {
        const { loadingCategories } = this.state;
        let renderDetails;

        renderDetails = (
            <React.Fragment>
                <li className="nav-item">
                    <Link className="nav-link" to={"/host/register"}>
                        signup
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/host/login"}>
                        Login
                    </Link>
                </li>
            </React.Fragment>
        );

        return (
            <div className="sticky-top">
                <nav
                    className="navbar navbar-expand-xl bg-light navbar-light white-header"
                    id="navbar"
                >
                    <Link className="navbar-brand" to={"/"}>
                        <img
                            src={logo}
                            alt={configuartion.get("configData.site_name")}
                        />
                    </Link>
                    {/* <form className="form-inline justify-content-start">
            <div className="input-group dropdown">
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon">
                  <i className="fas fa-search" />
                </span>
              </div>
              <input
                type="text"
                className="form-control form-control-lg dropdown-toggle"
                data-toggle="dropdown"
                placeholder="try 'london'"
              />

              <div className="dropdown-menu nav-dropdown-menu">
                <h5 className="dropdown-title">explore Community Red</h5>
                <Link to="#" className="grey-outline-btn">
                  all
                </Link>
                {loadingCategories
                  ? ""
                  : this.renderCategory("grey-outline-btn")}
              </div>
            </div>
          </form> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapsibleNavbar"
                    >
                        <i className="fas fa-chevron-down" />
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="collapsibleNavbar"
                    >
                        <ul className="navbar-nav">{renderDetails}</ul>
                    </div>
                </nav>

                <div className="header-height" />
            </div>
        );
    }
}

export default HostAuthHeader;
