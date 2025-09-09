import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HomePage from "../components/HomePage.jsx";
// import HomePage from "../pages/client/HomePage";
// import ProductPage from "../pages/client/ProductPage";
// import CartPage from "../pages/client/CartPage";
// import AdminDashboard from "../pages/admin/AdminDashboard";
// import AdminProducts from "../pages/admin/AdminProducts";
// import AdminOrders from "../pages/admin/AdminOrders";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<ProductPage />} /> */}
        {/* <Route path="/cart" element={<CartPage />} /> */}

        {/* Admin Routes */}
        {/* <Route path="/admin" element={<AdminDashboard />} /> */}
        {/* <Route path="/admin/products" element={<AdminProducts />} /> */}
        {/* <Route path="/admin/orders" element={<AdminOrders />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
