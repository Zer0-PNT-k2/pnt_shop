import LoginForm from '../pages/Login/LoginForm'
import RegisterForm from '../pages/Login/GegisterForm'
import Home from '../pages/Home'
import ProductsPage from '../pages/Products'
import BlogPage from '../pages/Blog'
import Pages from '../pages/Pages'
import ContactPage from '../pages/Contact'
import Wishlist from '../pages/Wishlist'
import OrdersPage from '../pages/Orders'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import AuthLayout from '../layouts/auth-layout/AuthLayout'

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <> <Outlet/> </>,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'products',
                element: <ProductsPage />
            },
            {
                path: 'blog',
                element: <BlogPage />
            },
            {
                path: 'pages',
                element: <Pages />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'wishlist',
                element: <Wishlist />
            },
            {
                path: 'order',
                element: <OrdersPage />
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginForm />
            },
            {
                path: 'register',
                element: <RegisterForm />
            },
        ]
    },
    {
        path: "*",
        element: <div>Trang nay la 404 </div>
    }
])