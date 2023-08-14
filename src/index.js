import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./Component/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ToDoProvider } from "./Providers/ToDoProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ToDoProvider>
        <App />
      </ToDoProvider>
    </Router>
  </React.StrictMode>
);
