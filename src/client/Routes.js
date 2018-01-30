import React from "react";
import Home from "./pages/Home";
import Users from "./pages/Users";

const routes = [
  {
    path: "/",
    exact: true,
    ...Home
  },
  {
    path: "/users",
    exact: true,
    ...Users
  }
];

export default routes;
