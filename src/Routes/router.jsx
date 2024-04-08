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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                element: <LuxuryStateDetails></LuxuryStateDetails>,
                loader: () => fetch('/sagments.json')
            },
            {
                path: '/update',
                element: <UpdateProfile></UpdateProfile>
            }
        ]
    },
]);

export default router;