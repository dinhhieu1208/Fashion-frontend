import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./../components/client/Header.jsx";
import Footer from "./../components/client/Footer.jsx";
import HomePage from "./../components/client/HomePage.jsx";
import LoginPage from "./../page/client/LoginPage.jsx";
import RegisterPage from "./../page/client/RegisterPage.jsx";
import ContactPage from "./../components/client/Contact.jsx";
import IntroducePage from "./../page/client/IntroducePage.jsx";
import CartPage from "./../page/client/CartPage.jsx";
import PaymentPage from "./../page/client/PaymentPage.jsx";
import ProductPage from "./../page/client/ProductPage.jsx";
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
        <Route path="/cart" element={<CartPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/product" element={<ProductPage />} />

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
