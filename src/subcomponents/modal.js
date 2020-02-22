import React, { Component } from "react";
import ReactDOM from "react-dom";
import { axiosPost } from "../helpers/utils";
import axios from "axios";
class Modal extends Component {
  state = {
    name: "",
    email: "",
    zeal: "",
    phone: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      email: this.state.email,
      event_id: this.props.event.id,
      contact_no: this.state.phone,
      zeal_id: this.state.zeal
    };

    const options = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    axios
      .post(
        "http://backoffice.zealicon.in/api/event/participate",
        data,
        options
      )
      .then(res => {
        console.log("RESPONSE ==== : ", res);
      })
      .catch(err => {
        console.log("ERROR: ====", err);
      });
  };

  handleChange = e => {
    const elem = e.target;
    this.setState({
      [elem.name]: elem.value
    });
  };
  render() {
    return ReactDOM.createPortal(
      <div className="modalnew">
        <div className="innermodal p-3">
          <p className="text-center">
            Register for <b>{this.props.event.name}</b>
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="email">Email address:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="pwd">Phone:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Contact No."
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="pwd">Zeal/Temp Id:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Zeal/Temp Id"
                name="zeal"
                value={this.state.zeal}
                onChange={this.handleChange}
              />
            </div>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <button
                className="btn btn-secondary"
                onClick={this.props.hideModal}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>,
      document.getElementById("portal-root")
    );
  }
}
export default Modal;
