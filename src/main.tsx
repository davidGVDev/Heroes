import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Heroes } from "./Heroes";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Heroes />
    </BrowserRouter>
  </React.StrictMode>
);
