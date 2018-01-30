import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";

import Routes from "../client/Routes";

export default (store, req) => {
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
            <script>
              window.INITIAL_STATE = ${serialize(store.getState())}
            </script>
            <script src='bundle.js'></script>
        </body>
    </html>
  `;
  return html;
};
