import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container missing in index.html");
}

hydrateRoot(
  container,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
