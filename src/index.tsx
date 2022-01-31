import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
import GlobalStyle from "./Static/Styles/GlobalStyle";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
