// Start up point for client side application

import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import axios from "axios";

import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { renderRoutes } from "react-router-config";

import Routes from "./Routes";
import reducers from "./reducers";

const axiosInstance = axios.create({
  baseURL: "/api"
});

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(reduxThunk.withExtraArgument(axiosInstance))
);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
