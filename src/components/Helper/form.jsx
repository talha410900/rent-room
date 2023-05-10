import React, { Component } from "react";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };
  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.doSubmit();
  };
}

export default Form;
