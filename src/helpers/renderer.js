import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import Routes from "../client/Routes";

export default (store, req) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
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
