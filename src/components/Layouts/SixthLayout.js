import React, { Component } from "react";

import StaticFooter from "./Footers/StaticFooter";

// This Layouts used in Home page Header,  static footer and content

class SixthLayout extends Component {
    constructor(props) {
        super(props);

        // define states
    }

    render() {
        return (
            <div className="wrapper">
                <div>{React.cloneElement(this.props.children)}</div>
                <StaticFooter />
            </div>
        );
    }
}
export default SixthLayout;
