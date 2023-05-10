import React, { Component } from "react";

class TripShowAllAmen extends Component {
  state = {};
  render() {
    const { amenties } = this.props;
    return (
      <div className="modal fade" id="amenities">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <h1 className="section-head">All Amenties</h1>

              {amenties.data.map(details => (
                <div>
                  <h3 className="captalize  amenities-modal-head">
                    {details.user_question}
                  </h3>

                  {details.answers_data.map(answers => (
                    <h4 className="amenities-modal-para captalize">
                      {answers.title}
                    </h4>
                  ))}

                  <p className="amenties-line" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TripShowAllAmen;
