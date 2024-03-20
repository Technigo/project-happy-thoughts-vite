// import React from "react";
// import ReactDOM from "react-dom"; // Import ReactDOM for rendering

// import App from "./App";

// const root = document.getElementById("root");
// ReactDOM.render(<App />, root); // Render the App component into the root element

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
