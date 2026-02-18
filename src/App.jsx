import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Chasir from "./pages/Chasir";
import Product from "./pages/Product";
import Category from "./pages/Category";
import Report from "./pages/Report";
import Dashboard from "./pages/dashboard";
import Login from "./pages/Login";
import Protected from "./routes/ProtedRoutes";
import RiwayatTransaksi from "./pages/RiwayatTransaksi";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Protected>
              <MainLayout />
            </Protected>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produk" element={<Product />} />
          <Route path="/categori" element={<Category />} />
          <Route path="/kasir" element={<Chasir />} />
          <Route path="/riwayat" element={<RiwayatTransaksi />} />
          <Route path="/laporan" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
