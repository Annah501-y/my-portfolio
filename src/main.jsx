import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/styles/main.css";

// React looks for the root div from index.html.
const rootElement = document.getElementById("root");

// App is rendered inside the root div.
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);