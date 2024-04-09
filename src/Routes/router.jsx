import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import SingUp from "../Pages/SingUp/SingUp";
import Login from "../Pages/LogIn/Login";
import LuxuryStateDetails from "../Pages/LuxuryStateDetails/LuxuryStateDetails";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import Loader from "../Pages/Loader/Loader";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('/sagments.json')
            },
            {
                path: '/singup',
                element: <SingUp></SingUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/state/:id',
                element: <PrivateRoute>
                    <LuxuryStateDetails></LuxuryStateDetails>
                </PrivateRoute>,
                loader: () => fetch('/sagments.json')
            },
            {
                path: '/update',
                element: <PrivateRoute>
                    <UpdateProfile></UpdateProfile>
                </PrivateRoute>
            },
            {
                path: '/aboutUs',
                element: <PrivateRoute>
                    <AboutUs></AboutUs>,
                </PrivateRoute>,
                loader: () => fetch('/tems.json')
            }
        ]
    },
]);

export default router;