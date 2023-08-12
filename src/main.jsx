import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { InventoryContextProvider } from "./context/inventory-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InventoryContextProvider>
      <App />
    </InventoryContextProvider>
  </React.StrictMode>
);
