import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import Routes from "../client/Routes";
import { renderRoutes } from "react-router-config";

export default (store, req) => {
  console.log("STORE: ", store.getState());
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const html = `
    <html>
        <head></head>
        <body>
            <div id='root'>${content}</div>
            <script src='bundle.js'></script>
        </body>
    </html>
  `;
  return html;
};
