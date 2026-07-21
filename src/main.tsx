import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/globals.css";

console.log(
  "%c Bienvenido a Git Journey 🚀\n\n%c Si estás leyendo esto seguramente seas desarrollador.\n\n%c Gracias por visitar el proyecto.\n\n%c Repositorio:\n%c https://github.com/victorsnz/git-journey",
  "font-size: 20px; font-weight: bold; color: #3bce6b;",
  "color: #eeeef0;",
  "color: #eeeef0;",
  "color: #88888b;",
  "color: #3bce6b; text-decoration: underline;"
);

createRoot(document.getElementById("app")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
