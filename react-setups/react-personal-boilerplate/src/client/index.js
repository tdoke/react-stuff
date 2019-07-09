import React, { Suspense } from 'react';
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom'
import routes from "client/routes";


const renderApp = () =>
  <Suspense fallback={<div>...loading</div>}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Suspense>

ReactDOM.render(renderApp(), document.getElementById("app"));