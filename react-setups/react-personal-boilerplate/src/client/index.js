import React from 'react';
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";
import { BrowserRouter } from 'react-router-dom'
import routes from "client/routes";


const renderApp = () =>
  <BrowserRouter>
    {renderRoutes(routes)}
  </BrowserRouter>

ReactDOM.render(renderApp(), document.getElementById("app"));