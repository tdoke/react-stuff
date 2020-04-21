import PropTypes from "prop-types";
import React, { Component } from "react";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    const employee = { ...this.state };
    this.props.onSubmit(employee);
    this.setState({ firstName: "", lastName: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br></br>
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br></br>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

EmployeeForm.propTypes = {
  onSubmit: PropTypes.func
}

export default EmployeeForm;
