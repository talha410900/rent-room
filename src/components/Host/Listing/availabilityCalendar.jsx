import React, { Component } from "react";
import api from "../../../HostEnvironment";
import { Link } from "react-router-dom";
import Loader from "../../Helper/Loader";
import HostHelper from "../../Helper/hostHelper";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../../Helper/toaster";
import { DatePicker, Calendar } from "@y0c/react-datepicker";
import dayjs from "dayjs";
import "../../../../src/calendar.scss";
import { array } from "prop-types";
import { withRouter } from "react-router";

const onlyMonth = {
    month: "numeric"
};
const onlyYear = {
    year: "numeric"
};

class HostAvailability extends Component {
    state = {
        selected: [],
        num: 1,
        availabilities: null,
        loading: true,
        removed: true,
        availText: []
    };
    componentDidMount() {
        console.log(this.props);
        const inputData = {
            host_id: this.props.match.params.id,
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

                var dict = []; // create an empty array

                dict.push({
                    key: "keyName",
                    value: "the value"
                });

                var update = {};
                update["Hello"] = "Value";
                console.log("update", update);

                this.state.availabilities.map(availability => {
                    let array = [];
                    let availBlockStatus = {};
                    availability.availability_data.map(data => {
                        if (data.is_blocked_booking == 1) {
                            array.push(dayjs(data.date));
                            if (data.checkin_status == 0) {
                                let availDate = dayjs(data.date).format(
                                    "DD-MM-YYYY"
                                );
                                availBlockStatus[availDate] = "Booked";
                            }
                        }
                    });
                    console.log("availBlockStatus", availBlockStatus);
                    this.setState({ selected: array });
                    this.setState({ availText: availBlockStatus });
                });
            } else {
                // Do nothing.
            }
        });
    };
    handleChange = (date: dayjs.Dayjs) => {
        let check = true;
        const selected = [...this.state.selected];
        const inputDate = dayjs(date).format("YYYY MM-DD");

        selected.map((dat, index) => {
            if (inputDate == dayjs(dat).format("YYYY MM-DD")) {
                console.log("true", dayjs(dat).format("YYYY MM-DD"));
                selected.splice(index, 1);
                this.setState({ selected: selected });
                check = false;
            }
        });

        if (check) {
            this.setState({
                selected: [...this.state.selected, date]
            });
        } else {
            console.log("this is false");
        }
    };

    handleSubmit = event => {
        event.preventDefault();
        let array = [];
        let inputData = [];
        this.state.selected.map((dates, index) => {
            inputData = {
                date: dayjs(dates).format("YYYY-MM-DD"),
                is_blocked_booking: 1
            };
            array.push(inputData);
        });
        const formData = {
            dates: JSON.stringify(array),
            host_id: this.props.match.params.id
        };
        console.log("formdate", formData);
        api.postMethod("hosts_set_availability", formData).then(response => {
            if (response.data.success) {
                console.log("It is Done. ", response);
                ToastDemo(
                    this.props.toastManager,
                    response.data.message,
                    "success"
                );
            } else {
                ToastDemo(
                    this.props.toastManager,
                    response.data.error,
                    "error"
                );
            }
        });
    };
    handleNextIcon = () => {
        console.log("tiggered");
    };

    render() {
        const { selected } = this.state;
        const { availText } = this.state.availText;
        const customDayText = (date: dayjs.Dayjs) => {
            // for test (year, month remove)
            const classMap = this.state.availText;
            // const classMap = {
            //     "01-08-2019": "Booked",
            //     "03-08-2019": "Booked"
            //     // "02": "DEF"
            // };
            return classMap[dayjs(date).format("DD-MM-YYYY")];
        };
        return (
            <div className="main">
                <div className="site-content resp-padding-zero">
                    <div className="top-bottom-spacing">
                        <div className="row">
                            <div className="col-12 ">
                                <h2>
                                    Update your calendar
                                    <button
                                        className="green-outline-btn-small float-right"
                                        onClick={() =>
                                            this.props.history.go(-1)
                                        }
                                    >
                                        <i className="fas fa-chevron-left"></i>{" "}
                                        Go Back
                                    </button>
                                </h2>
                                <p>
                                    Select dates to block or unblock.{" "}
                                    <button
                                        className="btn btn-warning"
                                        onClick={this.handleSubmit}
                                    >
                                        <i className="fas fa-hand-pointer" />{" "}
                                        Click Here for Availability Update
                                    </button>
                                </p>
                                <hr />

                                <div id="test1">
                                    <Calendar
                                        {...this.props}
                                        selected={selected}
                                        onChange={this.handleChange}
                                        customDayText={customDayText}
                                    ></Calendar>
                                    {/* <button type="submit">Submit</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withToastManager(HostAvailability);
