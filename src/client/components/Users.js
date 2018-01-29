import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentWillMount() {
    this.props.fetchUsers();
  }
  componentWillReceiveProps(nextProps) {
    const { users } = nextProps;
    if (users) {
      this.setState({ users });
    }
  }
  renderUsers() {
    const { users } = this.state;
    if (!users) {
      return;
    }
    const result = users.map((user, i) => {
      return <li key={i}>{user.name}</li>;
    });
    return result;
  }
  render() {
    return <ul>{this.renderUsers.bind(this)()}</ul>;
  }
}

function mapStateToProps(state) {
  // console.log("STATE: ", state);
  return {
    users: state.usersReducer.users
  };
}

export default connect(mapStateToProps, { fetchUsers })(Users);
