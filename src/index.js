import "babel-polyfill";
import express from "express";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy";

import renderReact from "./helpers/renderer";
import createStore from "./helpers/createStore";
import Routes from "./client/Routes";

const app = express();

app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com/", {
    proxyReqOptDecorator: opts => {
      opts.headers["x-forwarded-host"] = "localhost:3000";

      return opts;
    }
  })
);
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore(req);
  const context = {};

  // let all promise resolve or reject before
  // placing in another promise
  const routes = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(routes).then(() => {
    const renderer = renderReact(store, req, context);

    const { NotFound, url } = context;
    if (NotFound) {
      res.status(404);
    }
    if (url) {
      res.redirect("/");
    }

    res.send(renderReact(store, req, context));
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
