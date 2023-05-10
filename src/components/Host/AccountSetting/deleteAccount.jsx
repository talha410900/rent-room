import React, { Component } from "react";
import ProfileInput from "../../Helper/profileInput";
import api from "../../../HostEnvironment";
import Helper from "../../Helper/Helper";
import HostProfileSideBar from "./hostProfileSideBar";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../../Helper/toaster";

class HostDeleteAccount extends Helper {
  state = {
    data: {},
    loadingContent: null,
    buttonDisable: false
  };

  handleDelete = event => {
    event.preventDefault();
    this.setState({
      loadingContent: "Loading... Please wait..",
      buttonDisable: true
    });
    api.postMethod("delete_account", this.state.data).then(response => {
      if (response.data.success === true) {
        ToastDemo(this.props.toastManager, response.data.message, "success");
        window.location = "/";
        this.setState({ loadingContent: null, buttonDisable: false });
      } else {
        ToastDemo(this.props.toastManager, response.data.error, "error");
        this.setState({ loadingContent: null, buttonDisable: false });
      }
    });
  };
  render() {
    return (
      <div className="main">
        <div className="site-content">
          <div className="top-bottom-spacing">
            <div className="row">
              <HostProfileSideBar />
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9">
                <form onSubmit={this.handleDelete}>
                  <div className="panel">
                    <div className="panel-heading">delete account</div>
                    <div className="panel-body account">
                      <h2 className="mt-0 medium-cls bottom">
                        Sorry to see you go
                      </h2>

                      <ProfileInput
                        label="old password"
                        type="password"
                        placeholder=""
                        id="old-pass"
                        name="password"
                        value={this.state.data.password}
                        onChange={this.handleChange}
                        description="Once your account is deleted, you will lose your
                        account and review details."
                      />

                      <div className="row">
                        <div className="col-9 offset-3 text-center">
                          <button
                            className="pink-btn btn-block"
                            disabled={this.state.buttonDisable}
                          >
                            {this.state.loadingContent != null
                              ? this.state.loadingContent
                              : "submit"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withToastManager(HostDeleteAccount);
