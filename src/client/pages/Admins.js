import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAdmins } from "../actions";
import AuthRequired from "../components/authRequired";

class Admins extends Component {
  constructor(props) {
    super(props);
    this.state = { admins: "" };
  }
  componentDidMount() {
    if (this.visited) {
      this.props.fetchAdmins();
    }
    this.visited = true;
  }
  componentWillReceiveProps(nextProps) {
    const { admins } = nextProps;
    if (admins) {
      this.setState({ admins });
    }
  }
  renderAdmins() {
    const { admins } = this.props;
    if (!admins) {
      return;
    }
    const result = admins.map(admin => {
      return <li key={admin.id}>{admin.name}</li>;
    });
    return result;
  }
  render() {
    return <ul>{this.renderAdmins.bind(this)()}</ul>;
  }
}

function loadData(store) {
  return store.dispatch(fetchAdmins());
}

function mapStateToProps(state) {
  return {
    admins: state.adminsReducer.admins
  };
}

Admins = AuthRequired(connect(mapStateToProps, { fetchAdmins })(Admins));
export default { loadData, component: Admins };
