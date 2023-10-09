import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Layout from "./components/layout/Layout";
import store from "./store/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Toaster position="top-right" />
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
