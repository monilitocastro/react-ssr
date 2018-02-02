import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../actions";

const renderAuthButtons = auth => {
  if (auth) {
    return (
      <li>
        <a href="/api/Logout">Logout</a>
      </li>
    );
  } else {
    return (
      <li>
        <a href="/api/auth/google">Sign In</a>
      </li>
    );
  }
};
const Header = ({ auth }) => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {renderAuthButtons(auth)}
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  console.log("STATE: ", state);
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
