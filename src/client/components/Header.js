import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCurrentUser } from "../actions";

const renderAuthButtons = auth => {
  const result = [];
  if (auth) {
    return [
      <li key={"1"}>
        <Link to={"/Users"}>Users</Link>
      </li>,
      <li key={"2"}>
        <Link to={"/Admins"}>Admin</Link>
      </li>,
      <li key={"3"}>
        <a href="/api/Logout">Logout</a>
      </li>
    ];
  } else {
    return (
      <li>
        <a href="/api/auth/google">Sign In</a>
      </li>
    );
  }
  return result;
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
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
