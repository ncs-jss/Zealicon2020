import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Team from "./components/team";
import About from "./components/about";
import Categories from "./components/category";
import Event from "./components/event";
import Reach from "./components/reach";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/team" component={Team} exact />
      <Route path="/about" component={About} exact />
      <Route path="/events" component={Categories} exact />
      <Route path="/reach" component={Reach} exact />

      <Route path="/events/:categoryId" component={Event} exact />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
