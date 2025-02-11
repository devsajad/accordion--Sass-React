import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app.jsx";

import "./scss/main.scss";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);