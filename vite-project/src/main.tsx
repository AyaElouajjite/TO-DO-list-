import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  /*
  <BrowserRouter> est un composant fourni par react-router-dom qui permet de gérer le routage 
  dans une application React en utilisant l’historique du navigateur.
  */
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
