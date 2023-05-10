import React, { Component } from "react";

import FixedHeaderWithSection from "./Headers/FixedHeaderWithSection";

import FloatingFooter from "./Footers/FloatingFooter";

// This Layouts used in Home page Header,  static footer and content

class SeventhLayout extends Component {
  render() {
    return (
      <div className="wrapper">
        <FixedHeaderWithSection {...this.props.children} />
        <div>{React.cloneElement(this.props.children)}</div>
        <FloatingFooter />
      </div>
    );
  }
}
export default SeventhLayout;
