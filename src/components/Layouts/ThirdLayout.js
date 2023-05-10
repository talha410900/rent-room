import React, { Component } from "react";

import FixedHeader from "./Headers/FixedHeader";

import FloatingFooter from "./Footers/FloatingFooter";

// This Layouts used in Home page Header,  static footer and content

class FirstLayout extends Component {
    render() {
        return (
            <div className="wrapper">
                <FixedHeader {...this.props.children.props} />
                <div>{React.cloneElement(this.props.children)}</div>
                <FloatingFooter />
            </div>
        );
    }
}
export default FirstLayout;
