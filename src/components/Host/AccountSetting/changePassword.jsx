import React, { Component } from "react";
import Helper from "../../Helper/Helper";
import api from "../../../HostEnvironment";
import HostHeader from "../HostLayout/hostHeader";
import ProfileInput from "../../Helper/profileInput";
import HostProfileSideBar from "./hostProfileSideBar";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../../Helper/toaster";

class HostChangePassword extends HostHeader {
  state = {
    data: {},
    loadingContent: null,
    buttonDisable: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loadingContent: "Loading... Please wait..",
      buttonDisable: true
    });
    api.postMethod("change_password", this.state.data).then(response => {
      if (response.data.success === true) {
        ToastDemo(this.props.toastManager, response.data.message, "success");
        this.setState({ loadingContent: null, buttonDisable: false });
      } else {
        ToastDemo(this.props.toastManager, response.data.error, "error");
        this.setState({ loadingContent: null, buttonDisable: false });
      }
    });
  };

  render() {
    let { data } = this.state;
    return (
      <div class="main">
        <div class="site-content">
          <div class="top-bottom-spacing">
            <div class="row">
              <HostProfileSideBar />
              <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9">
                <form onSubmit={this.handleSubmit}>
                  <div class="panel">
                    <div class="panel-heading">change password</div>
                    <div class="panel-body account">
                      <ProfileInput
                        label="old password"
                        type="password"
                        placeholder=""
                        id="old-pass"
                        name="old_password"
                        value={data.old_password}
                        description=""
                        onChange={this.handleChange}
                      />

                      <ProfileInput
                        label="new password"
                        type="password"
                        placeholder=""
                        id="new-pass"
                        name="password"
                        value={data.password}
                        description=""
                        onChange={this.handleChange}
                      />
                      <ProfileInput
                        label="confirm password"
                        type="password"
                        placeholder=""
                        id="confirm-pass"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        description=""
                        onChange={this.handleChange}
                      />

                      <div class="row">
                        <div class="col-9 offset-3 text-center">
                          <button
                            class="pink-btn btn-block"
                            disabled={this.state.buttonDisable}
                          >
                            {this.state.loadingContent != null
                              ? this.state.loadingContent
                              : "reset password"}
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

export default withToastManager(HostChangePassword);
