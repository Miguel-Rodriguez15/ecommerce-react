import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import TaskContextProvider from "./context/TaskContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TaskContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TaskContextProvider>
);
