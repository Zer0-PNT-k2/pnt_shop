import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../pages/Login";
import RegisterForm from "../pages/Register";
import Home from "../pages/Home";
import ProductsPage from "../pages/Products";
import BlogPage from "../pages/Blog";
import ContactPage from "../pages/Contact";
import Wishlist from "../pages/Wishlist";
import OrdersPage from "../pages/Orders";
import AuthLayout from "../layouts/auth-layout/AuthLayout";
import MainLayout from "../layouts/main-layout/MainLayout";
import ProductLayout from "../layouts/product-layout/ProductLayout";
import NotFoundPage from "../pages/NotFound-404";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductsPage />,
        children: [
          {
            path: "all",
            element: <ProductLayout />,
          },
        ],
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
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
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
