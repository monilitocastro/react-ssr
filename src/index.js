import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";

import renderReact from "./helpers/renderer";
import createStore from "./helpers/createStore";
import Routes from "./client/Routes";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  const routes = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(routes).then(() => {
    res.send(renderReact(store, req));
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
