import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/index.scss";
import App from "./components/App/App";
import AppProvider from "./context/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
