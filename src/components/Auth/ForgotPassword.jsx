import React, { Component } from "react";
import InputField from "../Helper/inputfield";

class ForgotPassword extends Component {
    state = {};
    render() {
        return (
            <div>
                <div className="modal fade auth" id="forgot-password">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button
                                    type="button"
                                    className="close"
                                    id="close-forgot"
                                    data-dismiss="modal"
                                >
                                    <i className="material-icons">close</i>
                                </button>
                            </div>

                            <div className="modal-body">
                                <h1 className="section-head">reset password</h1>
                                <p className="small-line" />
                                <h4>
                                    Enter the email address associated with your
                                    account, and we'll email you a link to reset
                                    your password.
                                </h4>
                                <form className="top1">
                                    <InputField
                                        type="text"
                                        name="email"
                                        onChange={this.handleChange}
                                        placeholder="email"
                                        iconClassName="fas fa-envelope"
                                    />

                                    <div className="row">
                                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                            <a
                                                href="#"
                                                className="back-to-login close-forgot"
                                                href="#"
                                                data-toggle="modal"
                                                data-target="#login"
                                            >
                                                <i className="fas fa-chevron-left" />
                                                &nbsp;&nbsp;back to login
                                            </a>
                                        </div>
                                        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                            <button className="pink-btn bottom1">
                                                send reset link
                                            </button>
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

export default ForgotPassword;
