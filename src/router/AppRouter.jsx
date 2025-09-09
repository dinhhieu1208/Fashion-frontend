import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import HomePage from "../components/HomePage.jsx";
import LoginPage from "../page/LoginPage.jsx";
import RegisterPage from "../page/RegisterPage.jsx";
import ContactPage from "../components/Contact.jsx";
import IntroducePage from "../page/IntroducePage.jsx";
// import CartPage from "../pages/client/CartPage";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/introduce" element={<IntroducePage />} />
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
