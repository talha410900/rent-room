import React, { Component } from "react";
import api from "../../../Environment";
import { Link } from "react-router-dom";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../../Helper/toaster";

class WishList extends Component {
    state = {
        data: null,
        loading: true
    };

    componentDidMount() {
        // API call

        this.wishlistAPICall();
    }

    wishlistAPICall() {
        api.postMethod("wishlist").then(response => {
            if (response.data.success) {
                this.setState({ data: response.data.data, loading: false });
            }
        });
    }

    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    componentWillReceiveProps(nextProps) {
        this.wishlistAPICall();
    }

    deleteWishlist = (event, wishlist) => {
        event.preventDefault();
        api.postMethod("wishlist_operations", {
            host_id: wishlist.host_id,
            clear_all_status: 0
        }).then(response => {
            if (response.data.success) {
                ToastDemo(
                    this.props.toastManager,
                    response.data.message,
                    "success"
                );
            } else {
                ToastDemo(
                    this.props.toastManager,
                    response.data.error,
                    "error"
                );
            }
        });
    };
    render() {
        return (
            <div className="main-sec-content">
            <div className="main">
                <div className="site-content">
                    <div className="top-bottom-spacing">
                        <div>
                            <div className="row">
                                <h1 className="section-head">Lists</h1>
                            </div>

                            {this.state.loading ? (
                                ""
                            ) : this.state.data.length > 0 ? (
                                <p className="top4 mb-0 captalize medium-cls">
                                    your lists ({this.state.data.length})
                                </p>
                            ) : (
                                ""
                            )}
                            {this.state.loading ? (
                                "Loading"
                            ) : this.state.data.length > 0 ? (
                                <div className="row">
                                    {this.state.data.map(wishlist => (
                                        <div
                                            className="col-sm-6 col-md-4 col-lg-4 col-xl-4"
                                            key={wishlist.wishlist_id}
                                        >
                                            <Link
                                                to={`/trip/${wishlist.host_id}`}
                                            >
                                                <div className="relative">
                                                    <div className="wishlist-img-sec">
                                                        <img
                                                            src={
                                                                wishlist.host_picture
                                                            }
                                                            alt={
                                                                wishlist.host_name
                                                            }
                                                            className="homes-img"
                                                        />
                                                        <div className="wishlist-text">
                                                            <h4 className="mt-0">
                                                                {
                                                                    wishlist.host_name
                                                                }
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="wishlist-icon-sec">
                                                        <div className="wishlist-icon">
                                                            <Link
                                                                to={"#"}
                                                                onClick={event =>
                                                                    this.deleteWishlist(
                                                                        event,
                                                                        wishlist
                                                                    )
                                                                }
                                                            >
                                                                <i className="fas fa-trash pink-clr" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div>
                                    <div className="row">
                                        <p>
                                            <b>Nothing saved yet.</b>
                                        </p>
                                    </div>
                                    <div className="row">
                                        <p>
                                            When you find something you like,
                                            click the heart icon to save it. If
                                            you’re planning a trip with others,
                                            invite them so they can save and
                                            vote on their favorites.
                                        </p>
                                    </div>
                                    <div className="row">
                                        <Link
                                            className="green-btn btn-lg text-white"
                                            to={`/`}
                                        >
                                            Start exploring
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default withToastManager(WishList);
