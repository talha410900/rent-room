import React, { Component } from "react";
import { Link } from "react-router-dom";

class HostForgotPassword extends Component {
  state = {};
  render() {
    return (
      <div className="page-content">
        <div className="prov-login">
          <div className="log-head">
            <h4>Reset Password</h4>
            <p>
              Enter the email address associated with your account, and we’ll
              email you a link to reset your password.
            </p>
          </div>
          <form className="top1 prov-login-form">
            <div className="form-group input-group">
              <input
                type="text"
                className="form-control"
                placeholder="email address"
              />
            </div>
            <button className="pink-btn bottom1">Send reset link</button>
          </form>
        </div>
      </div>
    );
  }
}

export default HostForgotPassword;
