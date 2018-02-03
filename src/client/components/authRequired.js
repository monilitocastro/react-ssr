import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const authRequired = WrappedComponent => {
  class ParentComponent extends Component {
    render() {
      const { auth } = this.props;
      switch (auth) {
        case false:
        case null:
        case "":
          return <Redirect to="/" />;
        default:
          return <WrappedComponent {...this.props} />;
      }
    }
  }
  ParentComponent = connect(state => ({ auth: state.auth }), null)(
    ParentComponent
  );
  return ParentComponent;
};

export default authRequired;
