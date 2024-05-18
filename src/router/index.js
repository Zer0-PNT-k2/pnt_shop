import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../pages/Login";
import RegisterForm from "../pages/Register";
import Home from "../pages/Home";
import ProductsPage from "../pages/Products";
import BlogPage from "../pages/Blog";
import ContactPage from "../pages/Contact";
import Wishlist from "../pages/Wishlist";
import OrdersPage from "../pages/Orders/OrdersPage";
import AuthLayout from "../layouts/auth-layout/AuthLayout";
import MainLayout from "../layouts/main-layout/MainLayout";
import MainLayoutAdmin from "../layouts/main-layout/MainLayoutAdmin";
import NotFoundPage from "../pages/NotFound-404";
import Details from "../pages/Details";
import DashboardAdmin from "../pages/admin/dashboard-admin";
import ProductsManager from "../pages/admin/products-manager/ProductsManager";
import AccountManager from "../pages/admin/account-manager";
import OrderManager from "../pages/admin/order-manager/OrderManager";
import { ProductEdit } from "../pages/admin/edit-form/product-manager/ProductEdit";
import { OrderEdit } from "../pages/admin/edit-form/order-manager/OrderEdit";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "products/details/:id",
        element: <Details />,
      },
      {
        path: "products/all",
        element: <ProductsPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "order",
        element: <OrdersPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <MainLayoutAdmin />,
    children: [
      {
        index: true,
        element: <DashboardAdmin />,
      },
      {
        path: "accounts",
        element: <AccountManager />,
      },
      {
        path: "products",
        element: <ProductsManager />,
      },
      {
        path: "products/edit/:id",
        element: <ProductEdit />,
      },
      {
        path: "orders",
        element: <OrderManager />,
      },
      {
        path: "orders/edit/:id",
        element: <OrderEdit />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "register",
        element: <RegisterForm />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
