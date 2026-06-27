import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider, LoginProvider } from "./context";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <LoginProvider>
        <App />
      </LoginProvider>
    </CartProvider>
  </BrowserRouter>
);
