import { Routes, Route } from "react-router-dom";
import HomePage from "./../components/client/HomePage.jsx";
import LoginPage from "./../page/client/LoginPage.jsx";
import RegisterPage from "./../page/client/RegisterPage.jsx";
import ContactPage from "./../components/client/Contact.jsx";
import IntroducePage from "./../page/client/IntroducePage.jsx";
import CartPage from "./../page/client/CartPage.jsx";
import PaymentPage from "./../page/client/PaymentPage.jsx";
import ProductPage from "./../page/client/ProductPage.jsx";
import ProfilePage from "./../page/client/ProfilePage.jsx";
import ChangePasswordPage from "@/page/client/ChangePasswordPage.jsx";
import LocationPage from "@/page/client/LocationPage.jsx";
import { Dashboard } from "@/page/admin/Dashboard.jsx";
import { LayoutAdmin } from "@/components/admin/LayoutAdmin.jsx";
import { LayoutClient } from "@/Layout.jsx";
import { CategoryList } from "@/page/admin/category/CategoryList.jsx";
import { Toaster } from "sonner";
import { ConfirmEmail } from "@/page/client/ConfirmEmail.jsx";
import { Login } from "@/page/admin/auth/Login.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";

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
          <Route path="/confirm/email" element={<ConfirmEmail />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/changePassword" element={<ChangePasswordPage />} />
          <Route path="/location" element={<LocationPage />} />
          {/* <Route path="/cart" element={<CartPage />} /> */}
        </Route>
      </Routes>
      <Toaster position="top-right" richColors />

      {/* admin route */}
      <Routes>
        <Route path="/admin/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<LayoutAdmin />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/category/list" element={<CategoryList />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
