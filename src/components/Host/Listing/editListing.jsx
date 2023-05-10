import React, { Component } from "react";
import api from "../../../HostEnvironment";
import Map, { GoogleApiWrapper, Marker } from "google-maps-react";
import { withToastManager } from "react-toast-notifications";
import ToastDemo from "../../Helper/toaster";
import { Link } from "react-router-dom";
import configuartion from "react-global-configuration";
import { isArray } from "util";

class EditListing extends Component {
  state = {
    displayFirst: true,
    loading: true,
    steps: null,
    stepNumber: null,
    stepData: null,
    loadingStep: true,
    stepNum: 0,
    secondApiResponse: null,
    secondApiLoading: true,
    thirdApiResponse: null,
    thirdApiLoading: true,
    fourthApiResponse: null,
    fourthApiLoading: true,
    fifthApiResponse: null,
    fifthApiLoading: true,
    sixthApiResponse: null,
    sixthApiLoading: true,
    categoryValue: null,
    subCategoryData: null,
    subcategoryLoading: true,
    subCategoryValue: null,
    checkedStatus: false,
    position: null,
    submitClicked: false,
    loadingContent: null,
    formData: {
      sub_category_id: "",
      host_type: "",
      total_guests: 0,
      min_guests: 0,
      max_guests: 0,
      total_bedrooms: 0,
      total_beds: 0,
      total_bathrooms: "",
      bathroom_type: "",
      service_location_id: 0,
      latitude: "",
      longitude: ""
    }
  };

  componentDidMount() {
    api
      .postMethod("hosts_steps", {
        step: "1_PROPERTY",
        host_id: this.props.match.params.id
      })
      .then(response => {
        if (response.data.success) {
          this.setState({
            loadingStep: false,
            stepData: response.data.data
          });
          const formData = { ...this.state.formData };
          this.state.stepData[0].data[0].answer.map(ans => {
            if (ans.is_checked == 1) {
              this.getSubcategory(ans.key, this.props.match.params.id);
              formData[this.state.stepData[0].data[0].server_key] = ans.key;
            }
          });
          formData["total_bathrooms"] = this.state.stepData[2].data[0].answer;
          this.state.stepData[0].data[1].answer.map(ans => {
            if (ans.is_checked == 1) {
              formData[this.state.stepData[0].data[1].server_key] = ans.key;
            }
          });
          this.state.stepData[1].data.map(ans => {
            formData[ans.server_key] = ans.answer;
          });
          this.state.stepData[2].data[1].answer.map(ans => {
            if (ans.is_checked == 1)
              formData[this.state.stepData[2].data[1].server_key] = ans.key;
          });
          formData["host_id"] = this.props.match.params.id;
          this.setState({ formData });
        }
      });

    this.setState({ stepNum: 1 });
  }

  renderAutoComplete = () => {
    const { google } = this.props;
    if (!google) {
      return;
    }
    const autocomplete = new google.maps.places.Autocomplete(
      this.autocomplete,
      { types: ["geocode"] }
    );

    autocomplete.setFields(["address_component", "geometry", "name"]);

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();

      if (!place.geometry) return;
      this.setState({ position: place.geometry.location });
      const formData = { ...this.state.formData };
      formData["latitude"] = place.geometry.location.lat();
      formData["longitude"] = place.geometry.location.lng();
      let full_address = "";
      place.address_components.map(
        address =>
          (full_address =
            full_address == ""
              ? address.long_name
              : full_address + "," + address.long_name)
      );
      formData["full_address"] = full_address;

      this.setState({ formData });
      console.log("post", this.state.position);
    });
  };

  handleNextButton = event => {
    event.preventDefault();
    this.setState({ stepNum: this.state.stepNum + 1 });
    if (this.state.secondApiLoading && this.state.stepNum == 2) {
      this.callSecondApi();
    }
    if (this.state.thirdApiLoading && this.state.stepNum == 3) {
      this.callThirdApi();
    }
    if (this.state.fourthApiLoading && this.state.stepNum == 4) {
      this.callFourthApi();
    }
    if (this.state.fifthApiLoading && this.state.stepNum == 5) {
      this.callFifthApi();
    }
    if (this.state.sixthApiLoading && this.state.stepNum == 6) {
      this.callSixthApi();
    }
  };

  handleBackButton = event => {
    event.preventDefault();
    if (this.state.stepNum > 1) {
      this.setState({ stepNum: this.state.stepNum - 1 });
    }
  };

  callSecondApi = () => {
    api
      .postMethod("hosts_steps", {
        step: "2_LOCATION",
        host_id: this.props.match.params.id
      })
      .then(response => {
        if (response.data.success) {
          this.setState({
            secondApiLoading: false,
            secondApiResponse: response.data.data
          });
          const formData = { ...this.state.formData };
          formData["full_address"] = response.data.data[0].data[1].value;
          const position = { ...this.state.position };
          position["lat"] = this.state.secondApiResponse[0].data[1].latitude;
          position["lng"] = this.state.secondApiResponse[0].data[1].longitude;
          this.setState({ position });
          this.state.secondApiResponse[0].data[0].answer.map(ans => {
            if (ans.is_checked == 1) {
              formData[this.state.secondApiResponse[0].data[0].server_key] =
                ans.key;
            }
          });
          this.setState({ formData });
        }
      });
  };

  callThirdApi = () => {
    api
      .postMethod("hosts_steps", {
        step: "3_AMENTIES",
        host_id: this.props.match.params.id
      })
      .then(response => {
        if (response.data.success) {
          this.setState({
            thirdApiLoading: false,
            thirdApiResponse: response.data.data
          });
          const formData = { ...this.state.formData };
          this.state.thirdApiResponse[0].data.map(details => {
            let array = [];
            if (details.answer.length > 0 && isArray(details.answer)) {
              details.answer.map(ans => {
                if (ans.is_checked == 1) {
                  array.push(ans.key);
                }
                formData[details.server_key] = array;
                this.setState({ formData });
              });
            }
          });
        }
      });
  };

  callFourthApi = () => {
    api
      .postMethod("hosts_steps", {
        step: "4_BASICS",
        host_id: this.props.match.params.id
      })
      .then(response => {
        if (response.data.success) {
          this.setState({
            fourthApiLoading: false,
            fourthApiResponse: response.data.data
          });
          const formData = { ...this.state.formData };
          this.state.fourthApiResponse[0].data.map(ans => {
            formData[ans.server_key] = ans.answer;
          });
          this.setState({ formData });
        }
      });
  };

  callFifthApi = () => {
    api
      .postMethod("hosts_steps", {
        step: "5_OTHER_QUESTIONS",
        host_id: this.props.match.params.id
      })
      .then(response => {
        if (response.data.success) {
          this.setState({
            fifthApiLoading: false,
            fifthApiResponse: response.data.data
          });
          const formData = { ...this.state.formData };
          this.state.fifthApiResponse[1].data.map(ans => {
            formData[ans.server_key] = ans.answer;
          });
          this.state.fifthApiResponse[0].data.map(details => {
            let key = details.server_key;
            details.answer.map(ans => {
              if (ans.is_checked == 1) {
                formData[key] = ans.key;
              }
            });
          });
          this.setState({ formData });
        }
      });
  };

  callSixthApi = () => {
    api
      .postMethod("hosts_steps", {
        step: "6_PRICING",
        host_id: this.props.match.params.id
      })
      .then(response => {
        if (response.data.success) {
          this.setState({
            sixthApiLoading: false,
            sixthApiResponse: response.data.data
          });
          const formData = { ...this.state.formData };
          this.state.sixthApiResponse[0].data.map(ans => {
            formData[ans.server_key] = ans.answer;
          });
          this.setState({ formData });
        }
      });
  };

  getSubcategory = (category_id, host_id) => {
    api
      .postMethod("sub_categories", {
        category_id: category_id,
        host_id: host_id
      })
      .then(response => {
        if (response.data.success) {
          this.setState({
            subcategoryLoading: false,
            subCategoryData: response.data.data
          });
          const formData = { ...this.state.formData };
          this.state.subCategoryData.map(subcategory => {
            if (subcategory.is_checked == 1) {
              formData["sub_category_id"] = subcategory.sub_category_id;
            }
          });
          this.setState({ formData });
        }
      });
  };

  categoryChange = ({ currentTarget: input }) => {
    // event.preventDefault();
    this.setState({ categoryValue: input.value });
    const formData = { ...this.state.formData };
    formData[input.name] = input.value;
    this.setState({ formData });
    this.getSubcategory(input.value);
  };
  handleChange = event => {
    // event.preventDefault();
    const input = event.target;
    const formData = { ...this.state.formData };
    formData[input.name] = input.value;
    this.setState({ formData });

    // this.setState({ subCategoryValue: input.value });
  };

  handleAmentiesChange = ({ currentTarget: input }) => {
    const formData = { ...this.state.formData };

    if (input.type === "checkbox") {
      if (input.checked) {
        if (formData[input.name] === undefined) {
          let array = [];
          const value = parseInt(input.value);
          array.push(value);
          formData[input.name] = array;
          this.setState({ formData });
        } else {
          const value = parseInt(input.value);
          formData[input.name].push(value);
          this.setState({ formData });
        }
      } else {
        const value = parseInt(input.value);
        let index = formData[input.name].indexOf(value);
        if (index !== -1) {
          formData[input.name].splice(index, 1);
          this.setState({ formData });
        }
      }
    }
    if (input.type === "radio") {
      formData[input.name] = input.value;
      this.setState({ formData });
    }
    if (input.type === "text") {
      formData[input.name] = input.value;
      this.setState({ formData });
    }
    if (input.type === "select-one") {
      formData[input.name] = input.value;
      this.setState({ formData });
    }
    if (input.type === "file") {
      formData[input.name] = input.files[0];
      this.setState({ formData });
    }
  };

  increament = (value, answer) => {
    const formData = { ...this.state.formData };
    if (formData[value] == "") {
      formData[value] = answer + 1;
    } else {
      formData[value] = this.state.formData[value] + 1;
    }
    this.setState({ formData });
  };

  decreament = (value, answer) => {
    const formData = { ...this.state.formData };
    if (formData[value] == "") {
      formData[value] = answer - 1;
    } else {
      formData[value] = this.state.formData[value] - 1;
    }
    this.setState({ formData });
  };

  submitForm = () => {
    this.setState({
      loadingContent: "Loading.. Please Wait..",
      submitClicked: true
    });
    api.postMethod("hosts_save", this.state.formData).then(response => {
      if (response.data.success) {
        this.props.history.push({
          pathname: "/host/listing",
          state: { success: true, message: response.data.message }
        });
      } else {
        alert(response.data.error);
        this.setState({
          loadingContent: null,
          submitClicked: false
        });
      }
    });
  };

  render() {
    const {
      displayFirst,
      loading,
      steps,
      stepNumber,
      loadingStep,
      stepData,
      stepNum,
      secondApiLoading,
      secondApiResponse,
      thirdApiLoading,
      thirdApiResponse,
      fourthApiLoading,
      fourthApiResponse,
      fifthApiLoading,
      fifthApiResponse,
      sixthApiLoading,
      sixthApiResponse,
      subCategoryData,
      subcategoryLoading,
      formData,
      checkedStatus,
      position,
      submitClicked,
      loadingContent
    } = this.state;
    return (
      <div
        className="wrapper"
        data-spy="scroll"
        data-target="#second"
        data-offset="100"
      >
        <nav className="navbar navbar-expand-xl bg-light navbar-light white-header">
          <Link className="navbar-brand" to={"/host/dashboard"}>
            <img
              data-src={window.location.origin + "/assets/site/favicon.png"}
              src={configuartion.get("configData.site_icon")}
              alt={configuartion.get("configData.site_name")}
            />
            <span style={{ marginLeft: "20px" }}>
              Step 1: Start with the basics
            </span>
          </Link>
        </nav>
        <div className="container">
          <div className="add-list">
            <div className="add-flow">
              <div className="flow-bg row">
                <div className="flow-bg-left col-md-7" />
                <div className="flow-bg-right col-md-5" />
              </div>
              <div id="smartwizard" className="add-list-wizard">
                <div className="add-list-content">
                  {loadingStep ? (
                    "Loading..."
                  ) : stepNum == 1 ? (
                    <div id="step-1" className="flow-tab">
                      <div className="add-flow-block row">
                        <div className="col-md-6">
                          <div className="add-flow-block-left">
                            <h4 className="flow-tit">{stepData[0].title}</h4>
                            <div className="flow-content">
                              <div className="flow-box">
                                <div className="form-group">
                                  <label>{stepData[0].data[0].question}</label>
                                  <select
                                    className="form-control mw-300"
                                    name="category_id"
                                    onChange={this.categoryChange}
                                    value={this.state.categoryValue}
                                  >
                                    <option>Select One</option>
                                    {stepData[0].data[0].answer.map(
                                      category => (
                                        <option
                                          key={category.key}
                                          value={category.key}
                                          selected={category.is_checked == 1}
                                        >
                                          {category.value}
                                        </option>
                                      )
                                    )}
                                  </select>
                                </div>

                                <div className="form-group">
                                  <label>Now choose a property type</label>
                                  <select
                                    className="form-control mw-300"
                                    name="sub_category_id"
                                    onChange={this.handleChange}
                                    // onSelect={this.categoryChange}
                                    value={formData.sub_category_id}
                                  >
                                    <option>Select One</option>
                                    {subcategoryLoading
                                      ? ""
                                      : subCategoryData.map(subcategory => (
                                          <option
                                            key={subcategory.sub_category_id}
                                            value={subcategory.sub_category_id}
                                          >
                                            {
                                              subcategory.sub_category_user_display_name
                                            }
                                          </option>
                                        ))}
                                  </select>
                                  <p className="form-note">
                                    Apartments are typically located in
                                    multi-unit residential buildings or
                                    complexes where other people live.
                                  </p>
                                </div>
                              </div>
                              <div className="flow-box">
                                <h5 className="flow-box-tit">
                                  {stepData[0].data[1].question}
                                </h5>
                                {stepData[0].data[1].answer.map(ans => (
                                  <div
                                    className="form-check add-list-block"
                                    key={ans.key}
                                  >
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name={stepData[0].data[1].server_key}
                                      id={ans.key}
                                      value={ans.key}
                                      onChange={this.handleChange}
                                      checked={
                                        formData[
                                          stepData[0].data[1].server_key
                                        ] == ans.key
                                      }
                                    />
                                    <label
                                      className="form-check-label row"
                                      htmlFor={ans.key}
                                    >
                                      <h5 className="flow-check-tit">
                                        {ans.value}
                                      </h5>
                                      <p className="flow-check-txt">
                                        {ans.description}
                                      </p>
                                    </label>
                                    <div className="clear-both" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : stepNum == 2 ? (
                    <div id="step-2" className="flow-tab">
                      <div className="add-flow-block row">
                        <div className="col-md-6">
                          <div className="add-flow-block-left">
                            <h4 className="flow-tit">{stepData[1].title}</h4>
                            <p className="main-txt">
                              {stepData[1].description}
                            </p>
                            <div className="flow-content">
                              {stepData[1].data.map(details => (
                                <div
                                  className="flow-box row mw-300 mb-50"
                                  key={details.question}
                                >
                                  <div className="col-md-6 col-6">
                                    <h5 className="increase-tit">
                                      <b>{details.question}</b>
                                    </h5>
                                  </div>
                                  <div className="col-md-6 col-6 text-right">
                                    <button
                                      className="minus-btn in-btn"
                                      onClick={() =>
                                        this.decreament(
                                          details.server_key,
                                          details.answer
                                        )
                                      }
                                    >
                                      <i className="fas fa-minus" />
                                    </button>
                                    <span className="in-num">
                                      {formData[details.server_key]}
                                    </span>
                                    <button
                                      className="plus-btn in-btn"
                                      onClick={() =>
                                        this.increament(
                                          details.server_key,
                                          details.answer
                                        )
                                      }
                                    >
                                      <i className="fas fa-plus" />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : stepNum == 3 ? (
                    <div id="step-3" className="flow-tab">
                      <div className="add-flow-block row">
                        <div className="col-md-6">
                          <div className="add-flow-block-left">
                            <h4 className="flow-tit">{stepData[2].title}</h4>
                            <p className="main-txt">
                              {stepData[2].description}
                            </p>
                            <div className="flow-content">
                              <div className="form-group large-form-group">
                                <label className="light-txt">
                                  {stepData[2].data[0].question}
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={stepData[2].data[0].question}
                                  name={stepData[2].data[0].server_key}
                                  value={formData.total_bathrooms}
                                  onChange={this.handleChange}
                                />
                              </div>
                              <div className="flow-box">
                                <h5 className="flow-box-tit">
                                  {stepData[2].data[1].question}
                                </h5>
                                {stepData[2].data[1].answer.map(ans => (
                                  <div
                                    className="form-check add-list-block"
                                    key={ans.key}
                                  >
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name={stepData[2].data[1].server_key}
                                      id={ans.key}
                                      value={ans.key}
                                      onChange={this.handleChange}
                                      checked={
                                        formData[
                                          stepData[2].data[1].server_key
                                        ] == ans.key
                                      }
                                    />
                                    <label
                                      className="form-check-label row"
                                      htmlFor={ans.key}
                                    >
                                      <h5 className="flow-check-tit">
                                        {ans.value}
                                      </h5>
                                      <p className="flow-check-txt">
                                        {ans.description}
                                      </p>
                                    </label>
                                    <div className="clear-both" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {secondApiLoading ? (
                    ""
                  ) : stepNum == 4 ? (
                    <div id="step-4" className="flow-tab">
                      <div className="add-flow-block row">
                        <div className="col-md-6">
                          <div className="add-flow-block-left">
                            <h4 className="flow-tit">
                              {secondApiResponse[0].title}
                            </h4>
                            <p className="main-txt">
                              {secondApiResponse[0].description}
                            </p>
                            <div className="flow-content">
                              <div className="form-group large-form-group">
                                <label className="light-txt">
                                  {secondApiResponse[0].data[0].question}
                                </label>
                                <select
                                  className="form-control"
                                  name={secondApiResponse[0].data[0].server_key}
                                  value={formData.service_location_id}
                                  onChange={this.handleChange}
                                >
                                  <option>Select Country</option>
                                  {secondApiResponse[0].data[0].answer.map(
                                    ans => (
                                      <option key={ans.key} value={ans.key}>
                                        {ans.value}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                              <div className="form-group large-form-group">
                                <label className="light-txt">
                                  Full Address
                                </label>
                                {/* <Map
                                  className="map"
                                  google={this.props.google}
                                  visible={false}
                                >
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="House name/number + street/road"
                                    onFocus={this.renderAutoComplete}
                                    ref={ref => (this.autocomplete = ref)}
                                    name={
                                      secondApiResponse[0].data[1].server_key
                                    }
                                    value={
                                      formData[
                                        secondApiResponse[0].data[1].server_key
                                      ]
                                    }
                                    onChange={this.handleAmentiesChange}
                                  />
                                </Map> */}
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="House name/number + street/road"
                                  onFocus={this.renderAutoComplete}
                                  ref={ref => (this.autocomplete = ref)}
                                  name={secondApiResponse[0].data[1].server_key}
                                  value={
                                    formData[
                                      secondApiResponse[0].data[1].server_key
                                    ]
                                  }
                                  onChange={this.handleAmentiesChange}
                                />
                                <Map
                                  className="map"
                                  google={this.props.google}
                                  visible={true}
                                  center={position}
                                >
                                  <Marker position={position} />
                                </Map>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {thirdApiLoading ? (
                    ""
                  ) : stepNum == 5 ? (
                    <div id="step-6" className="flow-tab">
                      <div className="add-flow-block row">
                        <div className="col-md-6">
                          <div className="add-flow-block-left">
                            <h4 className="flow-tit">
                              {thirdApiResponse[0].title}
                            </h4>
                            <p className="main-txt">
                              {thirdApiResponse[0].description}
                            </p>
                            <div className="flow-content">
                              {thirdApiResponse[0].data.map(details => (
                                <div
                                  className="flow-box row mw-300"
                                  key={details.server_key}
                                >
                                  <h5 className="flow-box-tit">
                                    {details.question}
                                  </h5>
                                  {details.answer.length > 0 &&
                                  isArray(details.answer) ? (
                                    details.answer.map(ans => (
                                      <div
                                        className="form-group form-check tick-check"
                                        key={ans.key}
                                      >
                                        <input
                                          type={details.type}
                                          className="form-check-input"
                                          name={details.server_key}
                                          value={ans.key}
                                          onChange={this.handleAmentiesChange}
                                          defaultChecked={ans.is_checked}
                                          id={ans.value}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor={ans.value}
                                        >
                                          <div>
                                            <h5 className="amen-tit">
                                              {ans.value}
                                            </h5>
                                          </div>
                                        </label>
                                      </div>
                                    ))
                                  ) : (
                                    <div className="form-group large-form-group">
                                      <input
                                        type={
                                          details.type == "input"
                                            ? "text"
                                            : details.type
                                        }
                                        className="form-control"
                                        placeholder=""
                                        name={details.server_key}
                                        onChange={this.handleAmentiesChange}
                                      />
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}

                  {fourthApiLoading ? (
                    ""
                  ) : stepNum == 6 ? (
                    <div id="step-8" className="flow-tab">
                      <div className="add-flow-block row">
                        <div className="col-md-6">
                          <div className="add-flow-block-left">
                            <h4 className="flow-tit">
                              {fourthApiResponse[0].title}
                            </h4>
                            <p className="main-txt">
                              {fourthApiResponse[0].description}
                            </p>
                            <div className="flow-content">
                              {fourthApiResponse[0].data.map(details => (
                                <div
                                  className="form-group large-form-group"
                                  key={details.server_key}
                                >
                                  <label className="light-txt">
                                    {details.question}
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={details.placeholder}
                                    name={details.server_key}
                                    onChange={this.handleAmentiesChange}
                                    value={formData[details.server_key]}
                                  />
                                </div>
                              ))}
                            </div>
                            <div className="flow-content">
                              {fourthApiResponse[1].data.map(details => (
                                <div
                                  className="form-group large-form-group"
                                  key={details.server_key}
                                >
                                  <label className="light-txt">
                                    {details.question}
                                  </label>
                                  <input
                                    type="file"
                                    className="form-control"
                                    name={details.server_key}
                                    onChange={this.handleAmentiesChange}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {fifthApiLoading ? (
                    ""
                  ) : stepNum == 7 ? (
                    <div id="step-9" className="flow-tab">
                      <div className="add-flow-block row">
                        <div className="col-md-6">
                          <div className="add-flow-block-left">
                            <h4 className="flow-tit">
                              {fifthApiResponse[0].title}
                            </h4>
                            <p className="main-txt">
                              {fifthApiResponse[0].description}
                            </p>
                            <div className="flow-content">
                              {fifthApiResponse[0].data.map(details => (
                                <div className="form-group large-form-group">
                                  <label className="light-txt">
                                    {details.question}
                                  </label>
                                  <select
                                    className="form-control"
                                    name={details.server_key}
                                    value={formData[details.server_key]}
                                    onChange={this.handleAmentiesChange}
                                  >
                                    <option>Select {details.question}</option>
                                    {details.answer.map(ans => (
                                      <option key={ans.key} value={ans.key}>
                                        {ans.value}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="add-flow-block-left">
                            <h4 className="flow-tit">
                              {fifthApiResponse[1].title}
                            </h4>
                            <p className="main-txt">
                              {fifthApiResponse[1].description}
                            </p>
                            <div className="flow-content">
                              {fifthApiResponse[1].data.map(details => (
                                <div className="form-group large-form-group">
                                  <label className="light-txt">
                                    {details.question}
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={details.question}
                                    name={details.server_key}
                                    value={formData[details.server_key]}
                                    onChange={this.handleAmentiesChange}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {sixthApiLoading ? (
                    ""
                  ) : stepNum == 8 ? (
                    <div id="step-10" className="flow-tab">
                      <div className="add-flow-block row">
                        <div className="col-md-6">
                          <div className="add-flow-block-left">
                            <h4 className="flow-tit">
                              {sixthApiResponse[0].title}
                            </h4>
                            <p className="main-txt">
                              {sixthApiResponse[0].description}
                            </p>
                            <div className="flow-content">
                              {sixthApiResponse[0].data.map(details => (
                                <div className="form-group large-form-group">
                                  <label className="light-txt">
                                    {details.question}
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder={details.placeholder}
                                    name={details.server_key}
                                    value={formData[details.server_key]}
                                    onChange={this.handleAmentiesChange}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                <div className="add-list-footer">
                  <div className="btn-toolbar sw-toolbar sw-toolbar-bottom justify-content-end">
                    <div
                      className="btn-group mr-2 sw-btn-group row bg-white"
                      role="group"
                    >
                      {stepNum == 1 ? (
                        ""
                      ) : (
                        <button
                          className="green-color add-back sw-btn-prev disabled"
                          type="button"
                          onClick={this.handleBackButton}
                        >
                          <i className="fas fa-chevron-left" /> Back
                        </button>
                      )}
                      <button
                        className="green-btn sw-btn-next"
                        type="button"
                        disabled={submitClicked}
                        onClick={
                          stepNum == 8 ? this.submitForm : this.handleNextButton
                        }
                      >
                        {stepNum == 8
                          ? loadingContent == null
                            ? "Submit"
                            : loadingContent
                          : "Next"}
                      </button>
                    </div>
                    <div className="clear-both" />
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyDsIG8XXKNR2B1pklpLlbx1cXh0GI7k76E"
})(EditListing);
