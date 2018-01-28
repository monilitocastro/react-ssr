import express from "express";
import renderReact from "./helpers/renderer";

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(renderReact(req));
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
