import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "wouter";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Base path is "" normally; the redesign hub serves this build under /originale. */}
    <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <App />
    </Router>
  </StrictMode>,
);
