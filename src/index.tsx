import React from "react";
import ReactDOM from "react-dom/client";
import { DataContextProvider } from "./context";
import Routes from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DataContextProvider>
      <Routes />
    </DataContextProvider>
  </React.StrictMode>
);
