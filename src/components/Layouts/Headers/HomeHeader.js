import React from "react";

import { Link } from "react-router-dom";

import Login from "../../Auth/Login";

import Register from "../../Auth/Register";
import Helper from "../../Helper/Helper";

import configuartion from "react-global-configuration";
import logo from '../../../assets/logo.png'

class HomeHeader extends Helper {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    data: {}
  };

  componentDidMount() {
    // Call api function
  }

  render() {
    // const count = Object.keys(this.state.data).length;

    let renderDetails;
    if (!localStorage.getItem("userLoginStatus")) {
      renderDetails = (
        <React.Fragment>
          <li className="nav-item">
            <Link className="nav-link" to={"/host"}>
              become A host
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="#"
              data-toggle="modal"
              data-target="#signup"
            >
              signup
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="#"
              data-toggle="modal"
              data-target="#login"
            >
              Login
            </Link>
          </li>
        </React.Fragment>
      );
    } else {
      renderDetails = (
        <React.Fragment>
          <li className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link1 dropdown-toggle"
              id="navbardrop"
              data-toggle="dropdown"
              alt=""
            >
              <img
                src={
                  localStorage.getItem("user_picture") === null
                    ? "../assets/img/user-pic.png"
                    : localStorage.getItem("user_picture")
                }
                className="profile-img"
              />
            </Link>
            <div className="dropdown-menu profile-drop">
              <Link to={"/edit-profile"} className="item">
                <div className="msg-head">
                  <h5>edit profile</h5>
                </div>
                <p className="msg-line" />
              </Link>
              <Link to={"/notification"} className="item">
                <div className="msg-head">
                  <h5>account settings</h5>
                </div>
                <p className="msg-line" />
              </Link>
              <Link to={"/logout"} className="item">
                <div className="msg-head">
                  <h5>logout</h5>
                </div>
                <p className="msg-line" />
              </Link>
            </div>
          </li>
        </React.Fragment>
      );
    }

    return (
      <div>
        <div id="sub-page">
          <nav className="navbar navbar-expand-xl bg-light navbar-light white-header trans-head fixed-top">
            <Link className="navbar-brand" to={"/"}>
              <img
                src={logo}
              // alt={configuartion.get("configData.site_name")}
              />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
              aria-controls="collapsibleNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="collapsibleNavbar"
            >
              <ul className="navbar-nav">{renderDetails}</ul>
            </div>
          </nav>
        </div>
        <div className="mob-header-height" />
        <Login {...this.props} />
        <Register {...this.props} />
      </div>
    );
  }
}

export default HomeHeader;
