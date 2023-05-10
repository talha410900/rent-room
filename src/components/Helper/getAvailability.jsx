import React, { Component } from "react";
import api from "../../Environment";
import { DatePicker, Calendar } from "@y0c/react-datepicker";
import dayjs from "dayjs";
const onlyMonth = {
  month: "numeric"
};
const onlyYear = {
  year: "numeric"
};
const onlyDate = {
  day: "numeric"
};

class GetAvailability extends Component {
  state = {
    selected: [],
    num: 1,
    availabilities: null,
    loading: true
  };
  componentDidMount() {
    const inputData = {
      host_id: this.props.host_id,
      month: new Date().toLocaleDateString("en-US", onlyMonth),
      year: new Date().toLocaleDateString("en-US", onlyYear),
      loops: 2
    };
    this.getAvailabilityApiCall(inputData);
  }
  getAvailabilityApiCall = inputData => {
    api.postMethod("hosts_availability", inputData).then(response => {
      if (response.data.success) {
        this.setState({
          availabilities: response.data.data,
          loading: false
        });
        setTimeout(() => {
          this.state.availabilities.map(availability => {
            let array = [];
            availability.availability_data.map(data => {
              if (data.is_blocked_booking == 1) array.push(dayjs(data.date));
            });
            this.setState({ selected: array });
          });
        }, 3000);

        if (this.state.num > 1) console.log(this.state.selected[0].c);
      }
    });
  };

  customDayText = (date: dayjs.Dayjs) => {
    // for test (year, month remove)
    // const classMap = {
    //   "01": "Abc",
    //   "02": "DEF"
    // };
    console.log("DAte in custom text", dayjs(date).format("DD"));
    console.log("DAte in custom text", dayjs(date).format("MM"));
    let classMap = {};
    this.state.availabilities.map(availability => {
      if (parseInt(availability.month) == dayjs(date).format("MM")) {
        availability.availability_data.map(data => {
          if (data.is_available == 1) {
            classMap[dayjs(date).format("DD")] =
              data.pricings.per_day_formatted;
          }
        });
      }
    });
    console.log("classMap", classMap);
    return classMap[dayjs(date).format("DD")];
  };

  render() {
    const { selected, loading, availabilities } = this.state;

    return (
      <div className="main">
        <div className="site-content resp-padding-zero">
          <div className="top-bottom-spacing">
            <div className="row">
              <div className="col-12 ">
                <h2>Update your calendar</h2>
                <p>Select dates to block or unblock.</p>
                <hr />
                {loading ? (
                  "Loading..."
                ) : (
                  <Calendar
                    {...this.props}
                    selected={selected}
                    // onChange={this.handleChange}
                    // customDayText={this.customDayText}
                    showMonthCnt={2}
                    readOnly={true}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GetAvailability;
