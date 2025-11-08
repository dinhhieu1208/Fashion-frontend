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
import ProductDetailPage from "./../page/client/ProductDetailPage.jsx";
import ChangePasswordPage from "@/page/client/ChangePasswordPage.jsx";
import LocationPage from "@/page/client/LocationPage.jsx";
import AdminDashboard from "@/page/admin/Dashboard.jsx";
import OrderPage from "@/page/client/OrderPage.jsx";
import { LayoutAdmin } from "@/components/admin/LayoutAdmin.jsx";
import { LayoutClient } from "@/Layout.jsx";
import { CategoryList } from "@/page/admin/category/CategoryList.jsx";
import AddCategory from "@/page/admin/category/CategoryAdd.jsx";
import { Toaster } from "sonner";
import { ConfirmEmail } from "@/page/client/ConfirmEmail.jsx";
import { Login } from "@/page/admin/auth/Login.jsx";
import { ProtectedRoute } from "./ProtectedRoute.jsx";
import ProfileAdminPage from "./../page/admin/ProfileAdminPage.jsx";
import { ProductList } from "@/page/admin/product/ProductList.jsx";
import ProductAdd from "@/page/admin/product/ProductAdd.jsx";
import { StyleList } from "@/page/admin/StyleAdmin/CategoryStyleList.jsx";
import AddStyle from "@/page/admin/StyleAdmin/StyleAdd.jsx";
import { OrderList } from "@/page/admin/orders/orderList.jsx";
import { CustomerList } from "@/page/admin/customer/customerList.jsx";
import { CategoryEdit } from "@/page/admin/category/CategoryEdit.jsx";
import ProductEdit from "@/page/admin/product/ProductEdit.jsx";
import EditStyle from "@/page/admin/StyleAdmin/styleEdit.jsx";
import { ProtectedRouterClient } from "./ProtectedRouterClient.jsx";
import { RoleList } from "@/page/admin/Role/RoleList.jsx";
import { RoleAdd } from "@/page/admin/Role/RoleAdd.jsx";
import { RoleEdit } from "@/page/admin/Role/RoleEdit.jsx";
import { VoucherAdd } from "@/page/admin/Voucher/VoucherAdd.jsx";

const AppRouter = () => {
  return (
    <>
      <Routes>
        {/* --- CLIENT --- */}
        <Route element={<LayoutClient />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/introduce" element={<IntroducePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/confirm/email" element={<ConfirmEmail />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/changePassword" element={<ChangePasswordPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route
            path="/orders"
            element={
              <ProtectedRouterClient>
                <OrderPage />
              </ProtectedRouterClient>
            }
          />
        </Route>

        {/* --- ADMIN --- */}
        <Route path="/admin/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<LayoutAdmin />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/category/list" element={<CategoryList />} />
            <Route path="/admin/category/edit/:id" element={<CategoryEdit />} />
            <Route path="/admin/category/add" element={<AddCategory />} />
            <Route path="/admin/profile" element={<ProfileAdminPage />} />
            <Route path="/admin/product/list" element={<ProductList />} />
            <Route path="/admin/product/add" element={<ProductAdd />} />
            <Route path="/admin/product/edit/:id" element={<ProductEdit />} />
            <Route path="/admin/style/list" element={<StyleList />} />
            <Route path="/admin/style/add" element={<AddStyle />} />
            <Route path="/admin/style/edit/:id" element={<EditStyle />} />
            <Route path="/admin/orders/list" element={<OrderList />} />
            <Route path="/admin/customers/list" element={<CustomerList />} />
            <Route path="/admin/role/list" element={<RoleList />} />
            <Route path="/admin/role/add" element={<RoleAdd />} />
            <Route path="/admin/role/edit/:id" element={<RoleEdit />} />
            <Route path="/admin/voucher/add" element={<VoucherAdd />} />
          </Route>
        </Route>
      </Routes>

      <Toaster position="top-right" richColors />
    </>
  );
};

export default AppRouter;
