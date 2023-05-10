import React, { Component } from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import api from "../../../HostEnvironment";
import { Link } from "react-router-dom";
import ToastDemo from "../../Helper/toaster";

const $ = window.$;

class HostAddCardForm extends Component {
    state = {
        formData: {
            cardnumber: "",
            expdate: "",
            cvc: "",
            firstname: "",
            lastname: ""
        },
        paynowClicked: null,
        buttonDisable: false
    };
    addCard = ev => {
        ev.preventDefault();

        this.setState({
            paynowClicked: "Please wait... Request processing...",
            buttonDisable: true
        });
        if (this.props.stripe) {
            this.props.stripe
                .createToken({
                    type: "card",
                    name: localStorage.getItem("provider_name")
                })
                .then(payload => {
                    const inputData = {
                        card_token: payload.token.id
                    };
                    api.postMethod("cards_add", inputData)
                        .then(response => {
                            if (response.data.success === true) {
                                ToastDemo(
                                    this.props.toastManager,
                                    response.data.message,
                                    "success"
                                );
                                $("#AddCardModel").modal("hide");
                                window.location = "/host/payment";
                            } else {
                                this.setState({
                                    paynowClicked: null,
                                    buttonDisable: false
                                });
                                ToastDemo(
                                    this.props.toastManager,
                                    response.data.error,
                                    "error"
                                );
                            }
                        })
                        .catch(error => {
                            this.setState({
                                paynowClicked: null,
                                buttonDisable: false
                            });
                            ToastDemo(this.props.toastManager, error, "error");
                        });
                })
                .catch(error => {
                    this.setState({
                        paynowClicked: null,
                        buttonDisable: false
                    });
                    ToastDemo(
                        this.props.toastManager,
                        "Please check your card details and try again..",
                        "error"
                    );
                });
        } else {
            this.setState({
                paynowClicked: null,
                buttonDisable: false
            });
            ToastDemo(
                this.props.toastManager,
                "Stripe is not configured",
                "error"
            );
        }
    };
    handleChange = ({ currentTarget: input }) => {
        const formaData = { ...this.state.formData };
        formaData[input.name] = input.value;
        this.setState({ formaData });
    };
    render() {
        // const { formData } = this.state;

        return (
            <div className="modal fade" id="AddCardModel">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                            >
                                &times;
                            </button>
                        </div>

                        <div className="modal-body">
                            <h1 className="section-head">
                                add a payment method
                            </h1>
                            <img
                                src="../assets/img/cards.png"
                                className="cards-img"
                                alt="Cards"
                            />

                            <form onSubmit={this.addCard}>
                                <CardElement />
                                <div className="text-right">
                                    <Link
                                        className="grey-outline-btn btn-small"
                                        data-dismiss="modal"
                                        to="#"
                                    >
                                        Close
                                    </Link>
                                    <button
                                        type="submit"
                                        className="pink-btn btn-small auto-width"
                                        disabled={this.state.buttonDisable}
                                    >
                                        {this.state.paynowClicked != null
                                            ? this.state.paynowClicked
                                            : "add card"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectStripe(HostAddCardForm);
