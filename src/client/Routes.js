import React from "react";
import Home from "./pages/Home";
import Users from "./pages/Users";
import App from "./pages/App";

const routes = [
  {
    ...App,
    routes: [
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
    ]
  }
];

export default routes;
