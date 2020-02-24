import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
class Modal extends Component {
  state = {
    name: "",
    email: "",
    zeal: "",
    phone: "",
    message: ""
  };
  handleSubmit = e => {
    e.preventDefault();

    axios
      .get(
        "http://backoffice.zealicon.in/api/event/participate?" +
          "name=" +
          this.state.name +
          "&&" +
          "email=" +
          this.state.email +
          "&&" +
          "event_id=" +
          this.props.event.id +
          "&&" +
          "contact_no=" +
          this.state.phone +
          "&&" +
          "zeal_id=" +
          this.state.zeal
      )
      .then(res => {
        this.setState({
          message: res.data.message,
          name: "",
          email: "",
          phone: "",
          zeal: ""
        });
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
                required
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
                required
              />
            </div>
            <div className="form-group">
              <label for="pwd">Phone:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Contact No.(10 digits)"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                required
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
                required
              />
            </div>
            <p className="text-center">{this.state.message}</p>
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
