import React from "react";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Helmet from "react-helmet";

import Routes from "../client/Routes";

export default (store, req, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  const html = `
    <html>
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        </head>
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
