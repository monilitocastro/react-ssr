import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchUsers } from "../actions";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  componentDidMount() {
    if (this.visited) {
      this.props.fetchUsers();
    }
    this.visited = true;
  }
  componentWillReceiveProps(nextProps) {
    const { users } = nextProps;
    if (users) {
      this.setState({ users });
    }
  }
  renderUsers() {
    const { users } = this.props;
    if (!users) {
      return;
    }
    const result = users.map(user => {
      return <li key={user.id}>{user.name}</li>;
    });
    return result;
  }
  render() {
    return <ul>{this.renderUsers.bind(this)()}</ul>;
  }
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

function mapStateToProps(state) {
  return {
    users: state.usersReducer.users
  };
}

Users = connect(mapStateToProps, { fetchUsers })(Users);
export default { loadData, component: Users };
