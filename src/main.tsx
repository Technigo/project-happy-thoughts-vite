import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

//TypeScript: Added ! to tell TypeScript that "root" is never `null` or `undefined`
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
