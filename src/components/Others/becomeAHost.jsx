import React, { Component } from "react";
import CalForm from "../Helper/calForm";
import FaqSection from "../Helper/faqSection";
import ToastDemo from "../Helper/toaster";
import { withToastManager } from "react-toast-notifications";

class BecomeAHost extends Component {
  state = {};
  componentDidMount() {
    if (this.props.location.state != null) {
      ToastDemo(
        this.props.toastManager,
        this.props.location.state.error,
        "error"
      );
    }
  }
  render() {
    return (
      <div>
        <div
          className="host-banner-sec"
          style={{
            backgroundImage: `url('../../../assets/img/provider.jpg')`
          }}
        >
          <div className="host-banner-sec-overlay">
            <div className="site-content">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-5 host-banner-aligncenter">
                  <div className="">
                    {/* <h2 className="host-banner-subhead">host on Community Red</h2> */}
                    <h1 className="host-banner-head">
                      Become a Host with Community Red
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="host-details-sec banner-mobileview">
          <div className="host-details-head">
            <h2>Find out what top hosts earn in your area</h2>
          </div>
          <form className="host">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="bangaluru"
              />
            </div>
            <div className="form-group">
              <select className="form-control">
                <option>4 guests</option>
                <option>1 guests</option>
                <option>2 guests</option>
                <option>3 guests</option>
                <option>4 guests</option>
              </select>
            </div>
            <div className="form-group">
              <select className="form-control">
                <option>Entire palce</option>
                <option>Private room</option>
                <option>shared room</option>
              </select>
            </div>
            <div>
              <h1 className="amount">₹18,296</h1>
              <h4 className="amount-subhead">per month</h4>
            </div>
            <div className="mt-4">
              <button className="pink-btn">get started</button>
            </div>
          </form>
        </div>

        <div className="main">
          <div className="provider-features">
            <div className="site-content">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 co-xl-4">
                  <h2 className="features-head">Why host on Community Red?</h2>
                  <h4 className="features-para">
                    Offer your listings in one place and find tenants in need of properties in real-time, helping end the cycle of homelessness in your community.
                  </h4>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 co-xl-4">
                  <h2 className="features-head">You’re in control</h2>
                  <h4 className="features-para">
                    With Community Red, you’re in full control of your availability,
                    prices, house rules, and how you interact with guests. You
                    can set check-in times and handle the process however you
                    like.
                  </h4>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 co-xl-4">
                  <h2 className="features-head">We’re there at every step</h2>
                  <h4 className="features-para">
                    Community Red offers tools, hospitality tips, 24/7 support, and
                    an online community of experienced hosts for questions and
                    sharing ideas for success.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-content">
          <div className="host-top-bottom-spacing">
            <div className="host-section-head">
              <h1>How to be an Community Red host</h1>
            </div>
            <div className="row listings">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mob-listing-view">
                <img src="../assets/img/listing1.jpg" className="listing-img" alt="Listing1" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="media">
                  <h1 className="count">1</h1>
                  <div className="media-body">
                    <div className="listings-head">
                      <h3>Create your listing</h3>
                    </div>
                    <div className="listings-para">
                      <p>
                        It’s free and easy to create a listing on Community Red. Describe your space, how many guests you can accommodate, and add photos and details. Including any service charges.
                      </p>
                    </div>
                    {/* <div className="listings-para">
                      <p>
                        Our pricing tool can recommend competitive rates, but
                        what you charge is always up to you.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 listing-view text-right">
                <img src="../assets/img/listing1.jpg" className="listing-img" alt="Listing 1" />
              </div>
            </div>
            <div className="row listings">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <img src="../assets/img/listing2.jpg" className="listing-img" alt="Listing 2" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="media">
                  <h1 className="count">2</h1>
                  <div className="media-body">
                    <div className="listings-head">
                      <h3>Await your listing to be approved</h3>
                    </div>
                    <div className="listings-para">
                      <p>
                        All listings are approved and verified before going live.
                      </p>
                    </div>
                    {/* <div className="listings-para">
                      <p>
                        Our pricing tool can recommend competitive rates, but
                        what you charge is always up to you.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="row listings">
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mob-listing-view">
                <img src="../assets/img/listing1.jpg" className="listing-img" alt="Listing 3" />
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="media">
                  <h1 className="count">1</h1>
                  <div className="media-body">
                    <div className="listings-head">
                      <h3>            Interact with guests via your dashboard to arrange a viewing. </h3>
                    </div>
                    <div className="listings-para">
                      <p>

                      </p>
                    </div>
                    {/* <div className="listings-para">
                      <p>
                        Our pricing tool can recommend competitive rates, but
                        what you charge is always up to you.
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 listing-view text-right">
                <img src="../assets/img/listing1.jpg" className="listing-img" alt="Listing 4" />
              </div>
            </div>
          </div>
        </div>
        <div className="site-content">
          <div className="host-top-bottom-spacing">
            <div className="host-section-head">
              <h1>safety on Community Red</h1>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="media safety">
                  <img
                    src="../assets/img/safety-icon1.png"
                    alt="safety-icon"
                    className="mr-3 rounded-circle review-img"
                  />
                  <div className="media-body">
                    <h2> Host Guarantee</h2>
                    <p>
                      All Tenants are verified before communicating on Community Red
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="media safety">
                  <img
                    src="../assets/img/safety-icon2.png"
                    alt="safety-icon"
                    className="mr-3 rounded-circle review-img"
                  />
                  <div className="media-body">
                    <h2>Approved Landlords </h2>
                    <p>
                      All landlords are verified and approved before listing
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="media safety">
                  <img
                    src="../assets/img/safety-icon3.png"
                    alt="safety-icon"
                    className="mr-3 rounded-circle review-img"
                  />
                  <div className="media-body">
                    <h2>Community Red is built on trust</h2>
                    <p>
                      Everyone is verified for safety
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FaqSection />

        <div
          className="host-footer-img"
          style={{
            backgroundImage: `url('../../../assets/img/footer.jpg')`
          }}
        >
          <div className="site-content">
            <div className="row">
              <div className="col-sm-8 col-md-7 col-lg-6 col-xl-5">
                <div className="host-footer-content">
                  <div>
                    <div className="host-footer-content-head">
                      <h1>Start creating your listing</h1>
                    </div>
                    <a href="#" className="pink-btn">
                      get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withToastManager(BecomeAHost);
