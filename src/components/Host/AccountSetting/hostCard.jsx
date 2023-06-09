import React, { Component } from "react";
import HostProfileSideBar from "./hostProfileSideBar";
import api from "../../../HostEnvironment";
import ToastDemo from "../../Helper/toaster";
import { withToastManager } from "react-toast-notifications";
import { Link } from "react-router-dom";
import HostAddCardForm from "./hostAddCardForm";
import { Elements, StripeProvider } from "react-stripe-elements";

class HostCard extends Component {
  state = {
    data: null,
    loading: true
  };
  componentDidMount() {
    this.listCardApi();
  }

  listCardApi() {
    api.postMethod("cards_list").then(response => {
      if (response.data.success) {
        this.setState({
          data: response.data.data,
          loading: false
        });
      } else {
      }
    });
  }

  setDefaultCard = (event, card) => {
    event.preventDefault();
    api
      .postMethod("cards_default", { provider_card_id: card.provider_card_id })
      .then(response => {
        if (response.data.success) {
          ToastDemo(this.props.toastManager, response.data.message, "success");
          this.listCardApi();
        } else {
          ToastDemo(this.props.toastManager, response.data.error, "error");
        }
      });
  };

  deleteCard = (event, card) => {
    event.preventDefault();
    api
      .postMethod("cards_delete", { provider_card_id: card.provider_card_id })
      .then(response => {
        if (response.data.success) {
          ToastDemo(this.props.toastManager, response.data.message, "success");
          this.listCardApi();
        } else {
          ToastDemo(this.props.toastManager, response.data.error, "error");
        }
      });
  };

  render() {
    const { loading, data } = this.state;
    return (
      <StripeProvider apiKey="pk_test_uDYrTXzzAuGRwDYtu7dkhaF3">
        <Elements>
          <div className="main">
            <div className="site-content">
              <div className="top-bottom-spacing">
                <div className="row">
                  <HostProfileSideBar />
                  <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9">
                    <form>
                      <div className="panel">
                        <div className="panel-heading">Payment Methods </div>
                        <div className="panel-body account pt-3">
                          <div className="row">
                            {loading
                              ? ""
                              : data.cards.map(card => (
                                  <div
                                    className="col-sm-12 col-md-6 col-lg-6 col-xl-4 top"
                                    key={card.provider_card_id}
                                  >
                                    <div className="payment-box">
                                      <h5>XXXX XXXX XXXX {card.last_four}</h5>
                                      <div className="payment-bottom">
                                        {card.is_default == 1 ? (
                                          <p className="captalize m-0">
                                            default card
                                            <img
                                              src="../assets/img/credit-card.png"
                                              className="credit-img"
                                            />
                                          </p>
                                        ) : (
                                          <div>
                                            <Link
                                              to="#"
                                              onClick={event =>
                                                this.setDefaultCard(event, card)
                                              }
                                            >
                                              <p className="red-text1 m-0">
                                                set as default
                                              </p>
                                            </Link>
                                            <Link
                                              to="#"
                                              onClick={event =>
                                                this.deleteCard(event, card)
                                              }
                                            >
                                              <p className="captalize m-0">
                                                remove
                                                <img
                                                  src="../assets/img/credit-card.png"
                                                  className="credit-img"
                                                />
                                              </p>{" "}
                                            </Link>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                ))}

                            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 top">
                              <a
                                href="#"
                                data-toggle="modal"
                                data-target="#AddCardModel"
                              >
                                <div className="payment-box text-center">
                                  <i className="material-icons big-icon">add</i>
                                  <h4 className="captalize top">
                                    add a payment method
                                  </h4>
                                </div>
                              </a>
                            </div>
                          </div>
                          <HostAddCardForm {...this.props} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Elements>
      </StripeProvider>
    );
  }
}

export default withToastManager(HostCard);
