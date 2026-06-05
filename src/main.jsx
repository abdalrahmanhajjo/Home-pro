import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap CSS first so the custom styles below can override it
import "bootstrap/dist/css/bootstrap.min.css";
// Shared/global styles (reset, CSS variables, icons, shared utilities)
import "./styles/global.css";

// Scale the desktop layout to fit laptop screens (see scale.js)
import "./scale.js";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
