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
import { Dashboard } from "@/page/admin/Dashboard.jsx";
import { Layout } from "lucide-react";
import { LayoutAdmin } from "@/components/admin/LayoutAdmin.jsx";
import { LayoutClient } from "@/Layout.jsx";
import { CategoryList } from "@/page/admin/category/CategoryList.jsx";
// import CartPage from "../pages/client/CartPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* Client Routes */}
        <Route element={<LayoutClient />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/introduce" element={<IntroducePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/product" element={<ProductPage />} />

          {/* <Route path="/cart" element={<CartPage />} /> */}
        </Route>
      </Routes>

      {/* admin route */}
      <Routes>
        <Route element={<LayoutAdmin/>}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/category/list" element={<CategoryList/>}/>
        </Route>
      </Routes>

    </>
  );
};

export default AppRouter;
