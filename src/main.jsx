import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./Context/CartContex.jsx";
import { ProductProvider } from "./Context/ProductContext.jsx";
import { LoginProvider } from "./Context/AuthContext.jsx";
import { TransaksiProvider } from "./Context/Transaksi.jsx";
import { CategoryProvider } from "./Context/Categori.jsx";
import { UserProvider } from "./Context/UserContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginProvider>
      <ProductProvider>
        <CartProvider>
          <TransaksiProvider>
            <CategoryProvider>
              <UserProvider>
                <App />
              </UserProvider>
            </CategoryProvider>
          </TransaksiProvider>
        </CartProvider>
      </ProductProvider>
    </LoginProvider>
  </StrictMode>
);
