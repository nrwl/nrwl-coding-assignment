import React from "react";
import ReactDOM from "react-dom";
import { BackendService } from "./backend";
import "./index.css";
import App from "./app/app";

const backend = new BackendService();

ReactDOM.render(
  <React.StrictMode>
    <App backend={backend} />
  </React.StrictMode>,
  document.getElementById("root")
);
