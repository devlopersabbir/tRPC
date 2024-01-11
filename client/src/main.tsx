import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TRPCQueryClientProvider from "./providers/TRPCQueryClientProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <TRPCQueryClientProvider> */}
    <App />
    {/* </TRPCQueryClientProvider> */}
  </React.StrictMode>
);
