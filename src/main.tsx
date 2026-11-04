
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

// Global design system
import "./styles/global.css";
import "./styles/typography-overrides.css";

// Mount React application
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
