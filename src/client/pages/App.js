import React, { Component } from "react";
import { renderRoutes } from "react-router-config";

import Header from "./Header";
import { fetchCurrentUser } from "../actions/index";

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: store => {
    return store.dispatch(fetchCurrentUser());
  }
};
