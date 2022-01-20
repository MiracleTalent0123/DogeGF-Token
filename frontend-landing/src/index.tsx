import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.scss";
import App from "./app/App";
import Popup from "app/components/Dialog/Popup";
import Layout from "app/components/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
