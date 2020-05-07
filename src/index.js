import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import App from "./App";
import Home from "./Home"
import List from "./List"
import User from "./User"

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/list">
            Contact
          </NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={User} />
        <Route path="/list" component={List} />
       
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
