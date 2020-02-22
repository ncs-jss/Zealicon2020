import React from "react";
import { axiosGet, isMobile } from "../helpers/utils";
import { Link } from "react-router-dom";
import Modal from "../subcomponents/modal";
class Event extends React.Component {
  state = {
    name: false,
    eventList: [],
    individual: {},
    modal: false
  };
  sidebarActive = () => {
    this.setState(prevState => ({
      name: !prevState.name
    }));
  };
  showModal = () => {
    this.setState({
      modal: true
    });
  };
  hideModal = () => {
    this.setState({
      modal: false
    });
  };
  returnDate = d => {
    if (d == 1) {
      return "24 March";
    }
    if (d == 2) {
      return "25 March";
    }
    if (d == 3) {
      return "26 March";
    }
    if (d == 4) {
      return "27 March";
    }
  };
  componentDidMount() {
    let resp;
    resp = axiosGet(
      "http://backoffice.zealicon.in/api/event/category/" +
        this.props.match.params.categoryId
    );
    resp.then(res => {
      if (res.data && res.data.data.length > 0) {
        const response = axiosGet(
          "http://backoffice.zealicon.in/api/event/" + res.data.data[0].id
        );
        this.setState({
          eventList: res.data.data
        });
        response.then(respo => {
          this.setState({
            individual: respo.data.data
          });
        });
        response.catch(erro => {
          console.log(erro);
        });
      }
    });
    resp.catch(err => {
      console.log(err);
    });
  }

  getEventDetail = id => {
    const response = axiosGet("http://backoffice.zealicon.in/api/event/" + id);
    response.then(respo => {
      this.setState({
        individual: respo.data.data
      });
    });
    response.catch(erro => {
      console.log(erro);
    });
    if (isMobile()) {
      this.setState(prevState => ({
        name: !prevState.name
      }));
    }
  };

  render() {
    const { categoryId } = this.props.match.params;
    const { individual } = this.state;

    return (
      <>
        {this.state.modal ? (
          <Modal hideModal={this.hideModal} event={this.state.individual} />
        ) : null}
        <div className="event">
          <div className="wrapper">
            <nav id="sidebar" className={`${this.state.name ? "active" : ""}`}>
              <div className="sidebar-header">
                <Link to="/events">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 64 64"
                  >
                    <g className="aaaa" transform="translate(-18 -18)">
                      <g transform="translate(100) rotate(90)">
                        <path
                          className="bbbb"
                          d="M51.718,34.732a2.455,2.455,0,0,0-3.512.014l-11.585,11.8a2,2,0,1,0,2.822,2.828l7.86-7.883c.387-.388.7-.252.7.3v21.75a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2V41.786c0-.553.315-.685.7-.3l7.86,7.883a2,2,0,1,0,2.822-2.828Z"
                          transform="translate(100 99.541) rotate(180)"
                        />
                        <circle
                          className="cccc"
                          cx="30"
                          cy="30"
                          r="30"
                          transform="translate(80 80) rotate(180)"
                        />
                      </g>
                    </g>
                  </svg>
                </Link>
              </div>
              <ul className="list-unstyled components" id="side_event">
                {this.state.eventList.map(data => {
                  return (
                    <li
                      key={data.id}
                      onClick={this.getEventDetail.bind(this, data.id)}
                    >
                      <span
                        className={`${
                          data.id === individual.id ? "activeside" : ""
                        }`}
                      >
                        {data.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div id="content">
              <div
                className="container-fluid d-flex  d-md-none"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <button
                  type="button"
                  id="sidebarCollapse"
                  className="btn btn-link"
                  onClick={this.sidebarActive}
                >
                  <svg
                    className="svg-inline--fa fa-align-left fa-w-14"
                    aria-hidden="true"
                    data-prefix="fas"
                    data-icon="align-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    data-fa-i2svg=""
                  >
                    <path
                      fill="currentColor"
                      d="M288 44v40c0 8.837-7.163 16-16 16H16c-8.837 0-16-7.163-16-16V44c0-8.837 7.163-16 16-16h256c8.837 0 16 7.163 16 16zM0 172v40c0 8.837 7.163 16 16 16h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16zm16 312h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm256-200H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16h256c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16z"
                    ></path>
                  </svg>
                </button>
                <img
                  src="https://i.ibb.co/DKcQwp4/Logo-Final.png"
                  alt="Logo-Final-1"
                  border="0"
                  style={{ height: "50px" }}
                />
              </div>
              <div className="container-fluid pt-3">
                <div className="row">
                  <div className="col-md-8">
                    <h2 className="text-center eventHead font-weight-bold">
                      {categoryId == 1
                        ? "COLORALO"
                        : categoryId == 2
                        ? "MECHAVOLTZ"
                        : categoryId == 3
                        ? "PLAY IT ON"
                        : categoryId == 4
                        ? "ROBOTILES"
                        : categoryId == 5
                        ? "CODERZ"
                        : "Z-WARS"}
                    </h2>
                  </div>
                  <div className="col-md-3 offset-md-1 white_image">
                    <img
                      src="https://i.ibb.co/DKcQwp4/Logo-Final.png"
                      alt="Logo-Final-1"
                      border="0"
                      className="logo-image d-none d-md-block"
                    />
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-8">
                    <h2
                      className="font-weight-bold text-white pb-2 pt-2"
                      id="event_title"
                      // style="font-size: 24px; text-transform: uppercase;"
                    >
                      {individual && individual.name} (
                      <span className="font-weight-normal">
                        {this.returnDate(individual && individual.day)})
                      </span>
                    </h2>
                    <p
                      className="font_light"
                      id="event_description"
                      // style="color: rgba(255,255,255,0.8);"
                    ></p>
                    <p id="description">
                      {individual && individual.description}
                    </p>
                    <h3 className="font-weight-bold my-2">Rules</h3>
                    <p id="description">{individual && individual.rules}</p>
                  </div>
                  <div className="col-md-3 offset-md-1 white_image">
                    <h3 className="semi_bold text-white pt-4 pb-2  font_bold">
                      Prizes
                    </h3>
                    <p>
                      Winner1:{" "}
                      <b className="pl-1">{individual && individual.winner1}</b>
                    </p>
                    <p>
                      Winner2:{" "}
                      <b className="pl-1">{individual && individual.winner2}</b>
                    </p>
                    <br />
                    <br />
                    <h3 className="semi_bold text-white pt-2  font_bold">
                      Contact
                    </h3>
                    <p
                      className="font_regular text-white mb-0"
                      id="contact_name"
                      style={{ textTransform: "capitalize" }}
                    >
                      {individual && individual.contact_name}
                    </p>
                    <p className="font_regular text-white" id="contact_number">
                      {individual && individual.contact_no}
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={this.showModal}
                    >
                      Register Here
                    </button>
                    &nbsp;
                    {/* <a */}
                    {/*   href="http://eventmanager.zealicon.in" */}
                    {/*   target="_blank" */}
                    {/*   className="btn btn-primary" */}
                    {/* > */}
                    {/*   Notification */}
                    {/* </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Event;
