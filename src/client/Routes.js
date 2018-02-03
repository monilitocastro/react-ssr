import React from "react";
import Home from "./pages/Home";
import Users from "./pages/Users";
import App from "./pages/App";
import NotFound from "./pages/NotFound";
import Admins from "./pages/Admins";

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
      },
      {
        path: "/admins",
        exact: true,
        ...Admins
      },
      { ...NotFound }
    ]
  }
];

export default routes;
