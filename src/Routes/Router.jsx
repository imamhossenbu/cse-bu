
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />
            }
        ],
    },

]);


export default router;