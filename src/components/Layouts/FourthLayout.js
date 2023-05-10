import React, { Component } from "react";

import StaticFooter from "./Footers/StaticFooter";
import FixedHeader from "./Headers/FixedHeader";

// This Layouts used in Home page Header,  static footer and content

class FourthLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <FixedHeader {...this.props.children} />
        <div>{React.cloneElement(this.props.children)}</div>
        <StaticFooter />
      </div>
    );
  }
}
export default FourthLayout;
