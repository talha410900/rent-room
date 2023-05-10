import React, { Component } from "react";
import HomeRoomContent from "./homeRoomContent";
class SubCategory extends Component {
  state = {};
  render() {
    return (
      <div class="main">
        <div class="section-spacing">
          <div class="top-bottom-spacing">
            <div class="display-inline">
              <HomeRoomContent contentDetails="" title="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubCategory;
