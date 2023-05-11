import React, { Component } from "react";

class FaqSection extends Component {
  state = {};
  render() {
    return (
      <div className="site-content">
        <div className="host-top-bottom-spacing">
          <div className="host-section-head">
            <h1>Frequently asked questions</h1>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h4 className="faq-text">Getting Started</h4>
              <div id="accordion-faq" className="faq">
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapse1"
                    >
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                      Can I share my home on Community Red?
                    </a>
                  </div>
                  <div id="collapse1" className="collapse">
                    <div className="card-body">
                      you can learn about local laws and rules and get advice on
                      hosting responsibly in Community Red’s online Help Center.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapse2"
                    >
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                      Who can be an Community Red host?
                    </a>
                  </div>
                  <div id="collapse2" className="collapse">
                    <div className="card-body">
                      It’s easy to become an Community Red host in most areas, and
                      it’s always free to create a listing. Entire apartments
                      and homes, private rooms, treehouses, and castles are just
                      a few of the properties hosts have shared on Community Red. For
                      more details on what’s expected of hosts, check out
                      Community Red’s community standards, which revolve around
                      safety, security, and reliability, and hospitality
                      standards, which help hosts earn great guest reviews.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapse3"
                    >
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                      Does Community Red screen guests?
                    </a>
                  </div>
                  <div id="collapse3" className="collapse">
                    <div className="card-body">
                      Community Red verifies some information about guests and hosts
                      to help make our community a safer place for everyone.
                      That includes requiring a profile photo, confirmed phone
                      number, and confirmed email address. As a host, for added
                      security, you can also ask potential guests to provide an
                      official ID and complete Community Red’s Verified ID process.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <h4 className="faq-text">Earnings</h4>
              <div id="accordion-faq" className="faq">
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapse4"
                    >
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                      How should I price my listing on Community Red?
                    </a>
                  </div>
                  <div id="collapse4" className="collapse">
                    <div className="card-body">
                      What you charge is always up to you, but we do provide
                      tips to help make your space more competitive. When you
                      create a listing on Community Red, we suggest a price for your
                      property based on your location and other factors. You can
                      set nightly, weekly, and/or monthly rates. Our Smart
                      Pricing tool can help you get the most from your Community Red.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapse5"
                    >
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                      How do Community Red payments work?
                    </a>
                  </div>
                  <div id="collapse5" className="collapse">
                    <div className="card-body">
                      All payments are processed securely through Community Red’s
                      online payment system. Guests are charged when a
                      reservation is made, and hosts are paid 24 hours after
                      check-in. How you’re paid is up to you: You can set up
                      direct deposit, PayPal, or a number of other options.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <a
                      className="card-link"
                      data-toggle="collapse"
                      href="#collapse6"
                    >
                      <span>
                        <i className="fas fa-chevron-down" />
                      </span>
                      Does Community Red provide any insurance for hosts?
                    </a>
                  </div>
                  <div id="collapse6" className="collapse">
                    <div className="card-body">
                      Accidents are rare on Community Red, but just in case, we’ve
                      got your back. Our Host Guarantee provides up to
                      ₹6,00,00,000 of coverage in case property damage occurs,
                      and our Host Protection Insurance provides liability
                      coverage for up to ₹6,00,00,000, for every listing. We
                      also offer 24/7 host support—because your peace of mind is
                      priceless.
                    </div>
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

export default FaqSection;
