import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/CartContex.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { LoginProvider } from "./Context/AuthContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </LoginProvider>
  </StrictMode>
);
