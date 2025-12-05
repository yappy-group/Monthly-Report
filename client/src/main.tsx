import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import { Router } from "wouter";
import App from "./App";
import "./index.css";

// Custom hook for GitHub Pages base path support
const useBasePathLocation = () => {
  const base = import.meta.env.BASE_URL;
  
  const [path, setPath] = useState<string>(() => 
    window.location.pathname.replace(base, "") || "/"
  );

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname.replace(base, "") || "/");
    };
    
    window.addEventListener("popstate", handleLocationChange);
    return () => window.removeEventListener("popstate", handleLocationChange);
  }, [base]);

  const navigate = (to: string): void => {
    const fullPath = base + to.replace(/^\//, "");
    window.history.pushState(null, "", fullPath);
    setPath(to);
  };

  return [path, navigate] as [string, (to: string) => void];
};

createRoot(document.getElementById("root")!).render(
  <Router hook={useBasePathLocation}>
    <App />
  </Router>
);
