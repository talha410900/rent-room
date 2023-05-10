import React, { Component } from "react";

import HomeHeader from "./Headers/HomeHeader";

import StaticFooter from "./Footers/StaticFooter";

// This Layouts used in Home page Header,  static footer and content

class FirstLayout extends Component {
    render() {
        return (
            <div className="wrapper">
                <HomeHeader />
                <div>{React.cloneElement(this.props.children)}</div>
                <StaticFooter />
            </div>
        );
    }
}
export default FirstLayout;
