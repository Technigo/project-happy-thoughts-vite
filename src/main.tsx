/**
 * Index File
 * 
 * This file is the entry point of the application. It mounts the root React component (`App`) to the DOM.
 * 
 * Key Features:
 * - **ReactDOM.createRoot**: Initializes the React application by targeting the DOM element with the id `root`.
 * 
 * - **TypeScript Integration**:
 *   - The `!` (non-null assertion operator) is used to tell TypeScript that `document.getElementById("root")` will never be `null` or `undefined`.
 * - **Strict Mode**: Wrapping the `App` component in `<React.StrictMode>` enables extra checks and warnings during development.
 */

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
