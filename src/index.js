import express from "express";
import "babel-polyfill";
import renderReact from "./helpers/renderer";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();
  res.send(renderReact(store, req));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
