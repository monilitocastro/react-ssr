import React from "react";
import Home from "./components/Home";
import Users, { loadData } from "./components/Users";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    loadData,
    path: "/users",
    exact: true,
    component: Users
  }
];

export default routes;
// <Route exact path="/" component={Home} />
// <Route exact path="/users" component={Users} />
