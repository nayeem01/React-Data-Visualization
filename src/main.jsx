import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChartProvider } from "./context/ChartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChartProvider>
      <App />
    </ChartProvider>
  </React.StrictMode>
);
